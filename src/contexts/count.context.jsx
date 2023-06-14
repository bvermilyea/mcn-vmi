import { createContext, useState, useEffect } from 'react'

export const CountContext = createContext({
  countItems: [],
  countDate: null,
  addItemToCount: () => {},
  removeItemfromCount: () => {},
  countTotal: 0,
})

const addCountItems = (countItems, itemToAdd) => {
  const existingCountItem = countItems.find(
    (countItem) => countItem.id === itemToAdd.id
  )

  if (existingCountItem) {
    return [...countItems]
  }

  return [...countItems, { ...itemToAdd }]
}

const removeCountItem = (countItems, countItemToRemove) => {
  const existingCountItem = countItems.find(
    (countItem) => countItem.id === countItemToRemove.id
  )

  if (existingCountItem) {
    return countItems.filter(
      (countItem) => countItem.id !== countItemToRemove.id
    )
  }
}

export const CountProvider = ({ children }) => {
  const [countItems, setCountItems] = useState([])
  const [countDate, setCountDate] = useState('')
  const [countTotal, setCountTotal] = useState(0)

  useEffect(() => {
    const newCountTotal = countItems.reduce(
      (total, countItem) => total + countItem.weight * countItem.orderQty,
      0
    )
    setCountTotal(newCountTotal)
  }, [countItems])

  useEffect(() => {
    const current = new Date()
    const newCountDate = `${
      current.getMonth() + 1
    }/${current.getDate()}/${current.getFullYear()}`
    setCountDate(String(newCountDate))
  }, [countItems])

  const addItemToCount = (itemToAdd) => {
    setCountItems(addCountItems(countItems, itemToAdd))
  }

  const removeItemFromCount = (countItemToRemove) => {
    setCountItems(removeCountItem(countItems, countItemToRemove))
  }

  const value = {
    countItems,
    addItemToCount,
    removeItemFromCount,
    countTotal,
    countDate,
  }

  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}
