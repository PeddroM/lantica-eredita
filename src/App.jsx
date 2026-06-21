import React, { Profiler } from 'react'
import Navbar from './components/Navbar'
import CardPizza from './components/CardPizza'
import Footer from './components/Footer'
import Home from './views/Home'
import Register from './views/Register'
import Login from './views/Login'
import Profile from './components/Profile'
import Cart from './views/Cart'
import Pizza from './views/Pizza'
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/pizza/p001' element={<Pizza />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    {/*   <Home/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart/> */}
      {/* <Pizza/> */}
      <Footer/>
    </>
  )
}

export default App
