import { useContext } from 'react'

import { CountContext } from '../../contexts/count.context'

import CountItem from '../../components/count-item/count-item.component'

import './results.styles.scss'

const CountResults = () => {
  const { countItems, countDate, countTotal } = useContext(CountContext)

  return (
    <div className="results-container">
      <h2>Count Review - {countDate}</h2>
      <div className="results-header">
        <div className="header-block">
          <span>McN Item #</span>
        </div>
        <div className="header-block">
          <span>Qty Orders (lbs)</span>
        </div>
        <div className="header-block">
          <span>Date</span>
        </div>
        <div className="header-block">
          <span>Location</span>
        </div>
        <div className="header-block">
          <span>Sheets</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {countItems.map((countItem) => (
        <CountItem key={countItem.id} countedItem={countItem} />
      ))}
      <div>{countTotal}</div>
    </div>
  )
}

export default CountResults
