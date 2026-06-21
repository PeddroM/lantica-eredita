import React, { useState } from 'react'
import '../assets/CSS/Register-Login.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Register = () => {

    const [values, setValues] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
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

        if(!values.name || !values.lastName || !values.email || !values.password || !values.confirmPassword || !values.phone){
            alert("Debes completar todos los campos requeridos")
            return
        }

        if(values.password.length <6){
            alert("La contraseña debe contener al menos 6 caracteres")
            return
        }

        if (values.confirmPassword !== values.password){
            alert("Las contraseñas no coinciden")
            return
        }

        alert("¡Registro exitoso! Bienvenido a L'Antica Eredità")
        return
    }


  return (
    <>

   

   

    <div className="register-container">

     <h1>Register</h1>

      <form className='register-form' onSubmit={handleForm}>
        
        <input className='register-input'
        type="text"
        name='name'
        value={values.name}
        placeholder='Ingresa tu nombre'
        onChange={handleInputChange}
        />

        <input className='register-input'
        type="text"
        name='lastName'
        value={values.lastName}
        placeholder='Ingresa tu apellido'
        onChange={handleInputChange}
        />

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

        <input className='register-input'
        type="password"
        name='confirmPassword'
        value={values.confirmPassword}
        placeholder='Confirma tu Password'
        onChange={handleInputChange}
        />

        <input className='register-input'
        type="text"
        name='phone'
        value={values.phone}
        placeholder='ej: +56 9 1234 5678'
        onChange={handleInputChange}
        />

        <button className='register-btn' type='submit'>Register</button>
      </form>
    </div>

   

    </>
  )
}

export default Register
