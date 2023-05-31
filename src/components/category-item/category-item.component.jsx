import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
  const { title, subtitle, imgUrl, id } = category
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default CategoryItem
