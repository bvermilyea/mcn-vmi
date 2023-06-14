import { useContext } from 'react'

import { CountContext } from '../../contexts/count.context'

import CustomButton from '../button/button.component'

import './item-card.styles.scss'

const ItemCard = ({ item }) => {
  const {
    mtmPart,
    mcnItem,
    notes,
    weight,
    description,
    minParts,
    coilItem,
    minInventory,
    orderQty,
    id,
  } = item

  const { countItems, addItemToCount, removeItemFromCount } =
    useContext(CountContext)

  const addItemHandler = () => {
    addItemToCount(item)
  }

  const removeItemHandler = () => {
    removeItemFromCount(item)
  }

  const itemExistsAlready = countItems.find((countItem) => countItem.id === id)

  return (
    <div className="item-card-container">
      <div className="item-details">
        <span>MTM #: {mtmPart}</span>
        <span>McN #: {mcnItem}</span>
        <span>Coil: {coilItem}</span>
      </div>
      <div className="item-description">
        <span>Desc: {description}</span>
        <span>Weight: {weight}</span>
        <span>
          Order Qty: {orderQty} - {mcnItem} - {orderQty * weight}
        </span>
      </div>
      <div className="item-quantities">
        <span>Min Parts: {minParts}</span>
        <span>Min Inv: {minInventory}</span>
        <span>{notes}</span>
      </div>
      <div className="item-footer">
        {itemExistsAlready ? (
          <CustomButton buttonType="remove" onClick={removeItemHandler}>
            Remove from Count
          </CustomButton>
        ) : (
          <CustomButton buttonType="inverted" onClick={addItemHandler}>
            Add to Count
          </CustomButton>
        )}
      </div>
    </div>
  )
}

export default ItemCard
