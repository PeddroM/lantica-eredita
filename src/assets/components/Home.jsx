import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
  return (
    <>
      <Header/>

      <div className="pizza-container">
      <CardPizza
    name="Pizza Margherita"
    price={8900}
    ingredients={["Tomate, mozzarella fresca o fior di latte y albahaca fresca, con un hilo de aceite de oliva virgen extra."]}
    img="https://imag.bonviveur.com/pizza-margarita.jpg" alt="margherita"
    />
      <CardPizza
    name="Pizza Marinara"
    price={6800}
    ingredients={["Tomate, ajo cortado en láminas, orégano y aceite de oliva virgen extra. (No lleva queso)."]}
    img="https://img.delicious.com.au/qRrzAHSr/del/2019/03/marinara-pizza-102752-2.jpg" alt="marinara"
    />
      <CardPizza
    name="Pizza Capricciosa"
    price={13000}
    ingredients={["Tomate, mozzarella, champiñones, alcachofas, jamón cocido (prosciutto cotto) y aceitunas negras."]}
    img="https://comedera.com/wp-content/uploads/sites/9/2022/04/Pizza-capricciosa-shutterstock_1758758507.jpg" alt="capricciosa"
    />
    </div>
    </>
  )
}


export default Home
