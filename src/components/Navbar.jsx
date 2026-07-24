import React, { useContext } from 'react'
import '../assets/CSS/Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import { PizzaDataContext } from '../contexts/PizzaContext';
import { UserDataContext } from '../contexts/UserContext';

const Navbar = () => {

    const {token, logOut} = useContext(UserDataContext)
    
    const activeClass = ({isActive}) => (isActive ? "active" : "")

    const {calcularTotal} = useContext(PizzaDataContext)


  return (
    <>
    
    <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div className="logo">
            <p>L'ANTICA<span> EREDITÀ</span></p>
        </div>

        <div className='nav-links' style={{ display: 'flex', gap: '30px', justifyContent: 'center', flex: '2' }}>


        <NavLink className={activeClass} to='/'>Home</NavLink>

       {token ? (
           <>
        <NavLink className={activeClass} to='/profile'>Profile</NavLink>
        <button style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1rem' }} onClick={logOut}>Logout</button>
        </>
       ) : (
           <>
        <NavLink className={activeClass} to='/login'>Login</NavLink>
        <NavLink className={activeClass} to='/register'>Register</NavLink>
        </>
       )}

       </div>

            {/* <div className="nav-links">
                
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <>
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                        <li>
                            <Link to="/Register">Register</Link>
                        </li>
                        <li>
                            <Link to="/Profile">Profile</Link>
                        </li>
                    </>

                </ul>
            </div> */}

        <div className="nav-total">
                    <Link to="/Cart">Total: ${calcularTotal().toLocaleString('es-CL')} <span><i className="fa-solid fa-cart-shopping"></i></span></Link>
        </div>
     </nav>
    </>
  )
};

export default Navbar

