import { useContext } from 'react'

import { ItemsContext } from '../../contexts/item.context'

import ItemCard from '../../components/item-card/item-card.component'

import './count.styles.scss'

const Count = () => {
  const { items } = useContext(ItemsContext)

  const itemsMap = items.map((item) => {
    return {
      location: item.location,
      locationSortOrder: item.locationOrder,
      itemType: item.type,
      color: item.color,
    }
  })

  const uniqueItems = Array.from(
    new Set(itemsMap.map(JSON.stringify)),
    JSON.parse
  )

  console.log('Location Map: ', itemsMap)
  console.log('Unique Map ', uniqueItems)
  return (
    <div className="location-container">
      <h1>Location {uniqueItems.location}</h1>
      {items
        .filter((item) => item.type === 'sheets')
        .map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
    </div>
  )
}

export default Count
