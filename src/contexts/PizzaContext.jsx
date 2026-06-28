import { children, createContext, useState } from "react";

export const PizzaDataContext = createContext()

export const PizzaContextProvider =({children})=>{

    const [cart, setCart] = useState([])

    const agregarAlCarrito = (pizza)=>{

        const pizzaExiste = cart.find((item) => item.id === pizza.id)

        if(pizzaExiste){

            const modificarCarrito = cart.map((item) =>
            item.id === pizza.id ? {... item, count: item.count +1}: item)
            setCart(modificarCarrito)
        }else{
            setCart([...cart, {...pizza, count: 1}])
        }
        
    }

    const quitarDelCarrito = (id)=>{

        const pizzaCarrito = cart.map((pizza) =>{

            if(pizza.id === id){
                return{
                    ...pizza, count: pizza.count -1
                }
            }else{
                return pizza
            }
        })

        const actualizarCarrito = pizzaCarrito.filter(pizza=> pizza.count > 0)
        setCart(actualizarCarrito)
    }


    const calcularTotal = ()=>{

        return cart.reduce((total, item) => total + item.price * item.count, 0)
        
    }

    return(
        <PizzaDataContext.Provider value={{cart, setCart, agregarAlCarrito, calcularTotal, quitarDelCarrito}}> {children} </PizzaDataContext.Provider>
    )
}