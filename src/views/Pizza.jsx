import React, { useEffect, useState } from 'react'
import CardPizza from '../components/CardPizza'
import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"


const Pizza = () => {

   const [pizza, setPizza] = useState({})

  useEffect (() =>{
      
      const cargarPizza = async () =>{
        try {
          const url = 'http://localhost:5000/api/pizzas/p001'
          const response = await fetch(url)
          const data = await response.json()
  
          setPizza(data)
  
        } catch (error) {
          console.error("Error al cargar las pizzas:", error)
          
        }
      }
  
      cargarPizza()
    }, [])

    //coloque esto de manera temporaria ya que los enlacea de las fotos de la api están caídos
    const fotoReemplazo ={
  "napolitana": "https://images.unsplash.com/photo-1513104890138-7c749659a591",}

  const cambioFoto = fotoReemplazo[pizza.name]
    
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
         variant='contained'
         color='inherit'
         startIcon={<ShoppingCartIcon />}>
          Añadir al carrito
        </Button>

      </div>
    </Box>
    

            
    </>
  )
}

export default Pizza
