import React, { useState } from 'react'
import '../assets/CSS/Register-Login.css'

const Login = () => {

    const [values, setValues] = useState({
        email: "",
        password: "lanticaeredita123"
    })

    const handleInputChange = (event)=>{
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const handleForm = (event)=>{
        event.preventDefault()
        console.log(values)
        
        if(!values.email || !values.password){
            alert("Debes completas todos los campos requeridos")
            return
        }

        if(values.password !== "lanticaeredita123"){
            alert("La contraseña o el email no coinciden")
            return
        }

        alert("¡Inicio de sesión exitoso! Bienvenido a L'Antica Eredità")
    
    }
  return (
    <>
    <div className="register-container">

     <h1>Login</h1>

      <form className='register-form' onSubmit={handleForm}>
        
        <input className='register-input'
        type="text"
        name='email'
        value={values.email}
        placeholder='ejemplo@ejemplo.com'
        onChange={handleInputChange}
        />

        <input className='register-input'
        type="password"
        name='password'
        value={values.password}
        placeholder='Ingresa tu Password'
        onChange={handleInputChange}
        />

        <button className='register-btn' type='submit'>Login</button>
      </form>
    </div>
    </>
  )
}

export default Login
