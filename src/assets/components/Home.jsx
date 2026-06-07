import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
  return (
    <>
      <Header/>

      <div className="pizza-container">

        <CardPizza
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
        />




      </div>
    </>
  )
}


export default Home
