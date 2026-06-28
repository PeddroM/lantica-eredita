import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import CardPizza, {pizzas as pizzasData} from '../components/CardPizza'
import { Button } from '@mui/material'
import { PizzaDataContext } from '../contexts/PizzaContext'
import { useContext } from 'react'


const Home = () => {

  /* const [pizzas, setPizzas] = useState(pizzasData); */

  const [pizzas, setPizzas] = useState([])


  
  useEffect (() =>{
    
    const cargarPizzas = async () =>{
      try {
        const url = 'http://localhost:5000/api/pizzas'
        const response = await fetch(url)
        const data = await response.json()
        
        setPizzas(data)
        
      } catch (error) {
        console.error("Error al cargar las pizzas:", error)
        
      }
    }
    
    cargarPizzas()
  }, [])

  const {agregarAlCarrito} = useContext(PizzaDataContext)

  //coloque esto de manera temporaria ya que los enlacea de las fotos de la api están caídos
  const fotosReemplazo ={
  "napolitana": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  "española": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  "salame": "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
  "cuatro estaciones": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
  "bacon": "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
  "pollo picante": "https://images.unsplash.com/photo-1628840042765-356cda07504e"
}
  
  return (
    <>
      <Header/>

      <div className="pizza-container">

        {pizzas.map((pizza)=>{

          const cambioFoto = fotosReemplazo[pizza.name]


          return(
            <CardPizza
              key={pizza.id}
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={cambioFoto}
              agregarAlCarrito={() => agregarAlCarrito(pizza, cambioFoto)}
            />
          )
        })}

        {/* <button onClick={agregar.añadirAlCarrito}>Añadir al Carrito</button> */}

      </div>



    </>
  )
}


export default Home






{/* <CardPizza
          id="P001"
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "aceitunas", "orégano"]}
          img="https://easyways.cl/storage/20210208143331pizza-napolitana.jpg"
        />

        <CardPizza
          id="P002"
          name="Española"
          price={7250}
          ingredients={["mozzarella", "tomates", "salame", "orégano"]}
          img="https://rosselotsurdelivery.cl/wp-content/uploads/2020/05/PIZZA-PEPERONI.png"
        />

        <CardPizza
          id="P003"
          name="Salame"
          price={5990}
          ingredients={["mozzarella", "tomates", "salame", "orégano"]}
          img="https://tofuu.getjusto.com/orioneat-local/resized2/9gqKogjhnYvPLK6yE-1400-x.webp"
        />

        <CardPizza
          id="P004"
          name="Cuatro Estaciones"
          price={9590}
          ingredients={["mozzarella", "salame", "aceitunas", "champiñones"]}
          img="https://lh3.googleusercontent.com/proxy/yuTJ0nWKujG6OVm0GAG7dFR2FqPkA38QIEcJyNFX1WlfJx4H-4yyVDSBqYmcdnfqZ-hJmPdhud9y9p6Ob7mSu5S9l5eu7b-HKesEOPPtsxPb3KQIyq4vxJ8QGOVZaZ1kR3pGIy3t4w"
        />

        <CardPizza
          id="P005"
          name="Bacon"
          price={6450}
          ingredients={["mozzarella", "tomates cherry", "bacon", "orégano"]}
          img="https://josieandnina.com/wp-content/uploads/2025/01/Chicken-Bacon-Ranch-Pizza-Cut-Ranch-Chicken-Bacon-Ranch-Pizza-10.jpg"
        />

        <CardPizza
          id="P006"
          name="Pollo Picante"
          price={8500}
          ingredients={["mozzarella", "pimientos", "pollo grillé", "orégano"]}
          img="https://thumbs.dreamstime.com/b/porciones-de-pizza-pollo-picante-sobre-madera-428688426.jpg"
        /> */}
