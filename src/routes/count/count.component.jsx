import { useContext } from 'react'

import { ItemsContext } from '../../contexts/item.context'

import ItemCard from '../../components/item-cart/item-card.component'

const Count = () => {
  const { items } = useContext(ItemsContext)

  return (
    <div className="location-container">
      {items
        .filter((item) => item.type == 'sheets')
        .map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
    </div>
  )
}

export default Count
