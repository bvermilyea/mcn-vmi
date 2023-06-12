import './item-card.styles.scss'

import CustomButton from '../button/button.component'

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
  } = item

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
        <CustomButton buttonType="inverted">Add to Count</CustomButton>
      </div>
    </div>
  )
}

export default ItemCard
