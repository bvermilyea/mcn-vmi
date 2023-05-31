import Directory from './components/directory/directory.component'

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Sheet & Plate',
      subtitle: 'Count Sheets & Plate',
      imgUrl: 'images/Plates.png',
    },
    {
      id: 2,
      title: 'Parts',
      subtitle: 'Count Parts',
      imgUrl: 'images/Fabrication.jpg',
    },
    {
      id: 3,
      title: 'Count Results',
      subtitle: 'Review Current Count',
      imgUrl: 'images/list.png',
    },
  ]

  return <Directory categories={categories} />
}

export default App
