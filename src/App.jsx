import React from 'react'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import CardPizza from './assets/components/CardPizza'
import Footer from './assets/components/Footer'
import Register from './assets/components/Register'
import Login from './assets/components/Login'
import Cart from './assets/components/Cart'

const App = () => {
  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      <Cart/>
      {/* <Register/>
      <Login/> */}
      <Footer/>
    </>
  )
}

export default App
