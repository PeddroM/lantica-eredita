import React, { useContext, useState } from 'react'
import {PizzaCart} from  '../components/PizzaCart'
import '../assets/CSS/Cart.css'
import { PizzaDataContext } from '../contexts/PizzaContext'
import { UserDataContext } from '../contexts/UserContext'


const Cart = () => {
    
   /*  /* const [cart, setCart] = useState(PizzaCart) */

   const {cart, agregarAlCarrito, quitarDelCarrito, calcularTotal} = useContext(PizzaDataContext)

   const fotosReemplazo ={
  "napolitana": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  "española": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  "salame": "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
  "cuatro estaciones": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
  "bacon": "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
  "pollo picante": "https://images.unsplash.com/photo-1628840042765-356cda07504e"
}

const {profile} = useContext(UserDataContext)


   


   


    /* const agregarPizza = (id)=>{

        const pizzaSeleccionada = cart.map((pizza)=>{
            if(pizza.id === id){
                return{
                    ...pizza,
                    count: pizza.count + 1,
                }
            }else{
                return pizza
            }   
        })
        setCart(pizzaSeleccionada)
    }

    const eliminarPizza = (id)=>{

        const pizzaSeleccionada = cart.map((pizza)=>{
            if(pizza.id === id){
                return{
                    ...pizza,
                    count: pizza.count - 1,
                }
            }else{
                return pizza    
            }
        })

        const carritoActualizado = pizzaSeleccionada.filter((pizza) => pizza.count > 0)
        setCart(carritoActualizado)
    }

    const cacularTotal = () => {

        let sumaTotal = 0;

        cart.forEach((pizza)=>{
            sumaTotal = sumaTotal + (pizza.price * pizza.count)
        })

        return sumaTotal
    } */


  return (

    <>

    <div className='cart-container'>
        <h1>Detalles del Pedido</h1>

        {cart.length === 0 ? (
            <p className='cart-empty'>Tu carrito está vacío 🍕</p>
        ) : (

            <div className='cart-list'>

                {cart.map((pizza)=>{

                    const cambioFoto = fotosReemplazo[pizza.name]

                    return(
                        <div className='cart-item' key={pizza.id}>

                            <div className='cart-info'>
                                <img src={cambioFoto} alt={pizza.name} className='cart-img'/>
                                <h2 className='cart-name'>{pizza.name}</h2>
                            </div>

                            <div className='cart-action'>
                                <p className='cart-price'>${(pizza.price * pizza.count).toLocaleString('es-CL')}</p>

                                <div className='cart-counter'>
                                    
                                    <button className='aumentar-btn' onClick={() => agregarAlCarrito(pizza)}><i className="fa-solid fa-plus"></i></button>

                                    <button className='disminuir-btn' onClick={() => quitarDelCarrito(pizza.id)}><i className="fa-solid fa-minus"></i></button>

                                </div>
                            </div>

                        </div>

                    )
                })}

            <div className='cart-total'>
                <h3 className='monto-total'>Total: ${calcularTotal().toLocaleString('es-CL')}</h3>
                <button className='comprar-btn'disabled={!profile}>{profile ? "Ir a pagar" : "Inicia sesión para completar la compraq"}</button>
            </div>
        </div>
        )}
  
    </div>
    </>
  )
}

export default Cart



