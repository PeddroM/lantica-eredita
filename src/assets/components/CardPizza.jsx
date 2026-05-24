import React from 'react'
import './CardPizza.css'

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
