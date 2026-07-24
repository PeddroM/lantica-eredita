import React, { useContext, useState } from 'react'
import '../assets/CSS/Register-Login.css'
import { UserDataContext } from '../contexts/UserContext'


const Login = () => {

    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const {login} = useContext(UserDataContext)

    const handleInputChange = (event)=>{
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const handleForm = async (event)=>{
        event.preventDefault()
        console.log(values)
        
        if(!values.email || !values.password){
            alert("Debes completas todos los campos requeridos")
            return
        }

        await login(values.email, values.password)
    
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
