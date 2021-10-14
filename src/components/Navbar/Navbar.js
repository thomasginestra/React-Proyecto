import CartWidget from "../CartWidget/CartWidget"
import React from 'react'

function Navbar() {
    return (
        <nav className="navbar">
            <a className="nav-logo"><img className="logo" src="logolddlh.svg" alt="logo"/></a>
            <ul className="nav-list">
                <li><a className="item" href="#">Inicio</a></li>
                <li><a className="item" href="#">Como Comprar</a></li>
                <li><a className="item" href="#">Indumentaria</a></li>
                <li><a className="item" href="#">Contacto</a></li>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default Navbar