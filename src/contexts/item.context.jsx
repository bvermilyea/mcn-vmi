import { createContext, useState, useEffect } from 'react'

import ITEM_DATA from '../sample-data/sheets-data.json'

export const ItemsContext = createContext({
  items: [],
})

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(ITEM_DATA)
  const value = { items }
  return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
}
