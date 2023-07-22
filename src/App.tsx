import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Basket from './Pages/Basket'
import Signin from './Pages/Signin'
import ProtectRoute from './Hooks/ProtectRoute'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/Signin' element={<ProtectRoute><Signin /></ProtectRoute>} />
          <Route path='/' element={<ProtectRoute><Home /></ProtectRoute>} />
          <Route path='/myBasket' element={<ProtectRoute> <Basket /></ProtectRoute>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
