import React, { useContext, useEffect, useState } from 'react'
import CardPizza from '../components/CardPizza'
import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useParams } from 'react-router-dom'
import { PizzaDataContext } from '../contexts/PizzaContext'


const Pizza = () => {

   const [pizza, setPizza] = useState(null)

   const {id} = useParams()
   

  useEffect (() =>{
      
      const cargarPizza = async () =>{
        try {
          const url = `http://localhost:5000/api/pizzas/${id}`
          const response = await fetch(url)
          const data = await response.json()
  
          setPizza(data)
  
        } catch (error) {
          console.error("Error al cargar las pizzas:", error)
          
        }
        
      }
  
      cargarPizza()
    }, [id])

    if (!pizza || !pizza.name) {
    return
  }

    //coloque esto de manera temporaria ya que los enlacea de las fotos de la api están caídos
    const fotoReemplazo ={
  "napolitana": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  "española": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  "salame": "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
  "cuatro estaciones": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
  "bacon": "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
  "pollo picante": "https://images.unsplash.com/photo-1628840042765-356cda07504e"}

  const cambioFoto = fotoReemplazo[pizza.name]

   const {agregarAlCarrito} = useContext(PizzaDataContext)
  
  
    
  return (
    <>

    <Box
    sx={{
      display:'flex',
      justifyContent: 'center'
    }}>


      
      <div className="card">
        <img src={cambioFoto} className='card-img' alt={pizza.name}/>
        <h2 className='name-pizza'>{pizza.name}</h2>
        <p className='pizza-price'>Price: ${pizza.price ? pizza.price.toLocaleString('es-CL'): ''}</p>
        <p className='ingredients-pizza'>Ingredients: {pizza.ingredients?.join (', ')}</p>
        <p className='description'>{pizza.desc}</p>

         <Button
         variant='outlined'
         color='success'
         endIcon={<ShoppingCartIcon />}
         onClick={() => agregarAlCarrito(pizza)}>
          Añadir al carrito
        </Button>

      </div>
    </Box>
    

            
    </>
  )
}

export default Pizza
