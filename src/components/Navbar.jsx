import React from 'react'
import '../assets/CSS/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const total = 25000;
    const token = false;

  return (
    <>
    <nav className="navbar">
        <div className="logo">
            <p>L'ANTICA<span> EREDITÀ</span></p>
        </div>
            <div className="nav-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                   {token ? (
                    <>
                        <li><a href="Profile">Profile</a></li>
                        <li><a href="Logout">Logout</a></li>
                    </>
                ) : (
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
                )}

                </ul>
            </div>

        <div className="nav-total">
                    <Link to="/Cart">Total: {total.toLocaleString('es-CL')} <span><i class="fa-solid fa-cart-shopping"></i></span></Link>
        </div>
     </nav>
    </>
  )
};

export default Navbar

