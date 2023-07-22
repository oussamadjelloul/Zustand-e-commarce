import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Basket from './Pages/Basket'
import Signin from './Pages/Signin'
import ProtectRoute from './Hooks/ProtectRoute'
import ProtectAuth from './Hooks/ProtectAuth'
import Contact from './Pages/Contact'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/Signin' element={
            <ProtectAuth>
              <Signin />
            </ProtectAuth>} />
          <Route path='/' element={<ProtectRoute><Home /></ProtectRoute>} />
          <Route path='/myBasket' element={<ProtectRoute> <Basket /></ProtectRoute>} />
          <Route path='/contact' element={<ProtectRoute> <Contact /></ProtectRoute>} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
