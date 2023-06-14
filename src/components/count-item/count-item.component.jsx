import { useContext } from 'react'

import { CountContext } from '../../contexts/count.context'

import './count-item.styles.scss'

const CountItem = ({ countedItem }) => {
  const { mcnItem, mtmPart, weight, location, orderQty } = countedItem
  const { removeItemFromCount, countDate } = useContext(CountContext)

  const clearItemHandler = () => removeItemFromCount(countedItem)

  return (
    <div className="count-item-container">
      <span className="item">{mcnItem ? mcnItem : mtmPart}</span>
      <span className="quantity">{(orderQty * weight).toFixed(3)}</span>
      <span className="date">{countDate}</span>
      <span className="location">{location}</span>
      <span className="sheets">{orderQty}</span>
      <span className="remove" onClick={clearItemHandler}>
        &#10005;
      </span>
    </div>
  )
}

export default CountItem
