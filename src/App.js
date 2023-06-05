import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'

const Count = () => {
  return <h1>I am the count component</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="count" element={<Count />} />
        <Route path="authentication" element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
