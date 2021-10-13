import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className="navbar">
            <a className="nav-brand">Tienda Boca</a>
            <ul className="nav-list">
                <li><a className="item" href="#">Inicio</a></li>
                <li><a className="item" href="#">Como Comprar</a></li>
                <li><a className="item" href="#">Indumentaria</a></li>
                <li><a className="item" href="#">Contacto</a></li>
            </ul>
        </nav>
    )
}

export default Navbar