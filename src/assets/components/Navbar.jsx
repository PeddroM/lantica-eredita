import React from 'react'
import './Navbar.css'

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
                    <li><a href="#Home">Home<span><i class="fa-solid fa-pizza-slice"></i></span></a></li>

                   {token ? (
                    <>
                        <li><a href="Profile">Profile</a></li>
                        <li><a href="Logout">Logout</a></li>
                    </>
                ) : (
                    <>
                        <li><a href="#Login">Login</a></li>
                        <li><a href="#Register">Register</a></li>
                    </>
                )}

                </ul>
            </div>

        <div className="nav-total">
                    <a href="#Total">Total: {total.toLocaleString('es-CL')} <span><i class="fa-solid fa-cart-shopping"></i></span></a>
        </div>
     </nav>
    </>
  )
};

export default Navbar

