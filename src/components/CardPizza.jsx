import React from 'react'
import '../assets/CSS/CardPizza.css'
import { Link } from 'react-router-dom'

const CardPizza = ({name, price, ingredients=[], img}) => {
  return (
    <div className="card">
        <img src={img} className='card-img' alt={name}/>
        <h2 className='name-pizza'>{name}</h2>
        <p className='pizza-price'>Price: ${price ? price.toLocaleString('es-CL'): ''}</p>
        <p className='ingredients-pizza'>Ingredients: {ingredients.join (', ')}</p>
    </div>
  )
}

export default CardPizza

export const pizzas = [
  {
    desc: "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.",
    id: "P001",
    img: "https://easyways.cl/storage/20210208143331pizza-napolitana.jpg",
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    name: "napolitana",
    price: 5950,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P002",
    img: "https://rosselotsurdelivery.cl/wp-content/uploads/2020/05/PIZZA-PEPERONI.png",
    ingredients: ["mozzarella", "tomates", "jamón", "choricillo"],
    name: "española",
    price: 7250,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P003",
    img: "https://tofuu.getjusto.com/orioneat-local/resized2/9gqKogjhnYvPLK6yE-1400-x.webp",
    ingredients: ["mozzarella", "tomates", "salame", "orégano"],
    name: "salame",
    price: 5990,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P004",
    img: "https://lh3.googleusercontent.com/proxy/yuTJ0nWKujG6OVm0GAG7dFR2FqPkA38QIEcJyNFX1WlfJx4H-4yyVDSBqYmcdnfqZ-hJmPdhud9y9p6Ob7mSu5S9l5eu7b-HKesEOPPtsxPb3KQIyq4vxJ8QGOVZaZ1kR3pGIy3t4w",
    ingredients: ["mozzarella", "salame", "aceitunas", "champiñones"],
    name: "cuatro estaciones",
    price: 9590,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P005",
    img: "https://josieandnina.com/wp-content/uploads/2025/01/Chicken-Bacon-Ranch-Pizza-Cut-Ranch-Chicken-Bacon-Ranch-Pizza-10.jpg",
    ingredients: ["mozzarella", "tomates cherry", "bacon", "orégano"],
    name: "bacon",
    price: 6450,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P006",
    img: "https://thumbs.dreamstime.com/b/porciones-de-pizza-pollo-picante-sobre-madera-428688426.jpg",
    ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
    name: "pollo picante",
    price: 8500,
  },
];

  



