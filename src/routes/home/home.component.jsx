import { Outlet } from 'react-router-dom'
import Directory from '../../components/directory/directory.component'

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Sheet & Plate',
      subtitle: 'Count Sheets & Plate',
      imgUrl: 'images/Plates.png',
      url: '/count/sheets',
    },
    {
      id: 2,
      title: 'Parts',
      subtitle: 'Count Parts',
      imgUrl: 'images/Fabrication.jpg',
      url: '/count/parts',
    },
    {
      id: 3,
      title: 'Count Results',
      subtitle: 'Review Current Count',
      imgUrl: 'images/list.png',
      url: '/results',
    },
  ]

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  )
}

export default Home
