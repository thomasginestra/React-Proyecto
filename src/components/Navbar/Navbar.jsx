import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
import React from 'react'

function Navbar() {
    return (
        <nav className="navbar">
            <a className="nav-logo"><img className="logo" src="logolddlh.svg" alt="logo"/></a>
            <ul className="nav-list">
                <li><Link className="item" to={`/`}>Inicio</Link></li>
                <li><Link className="item" to={`/comocomprar`}>Como Comprar</Link></li>
                <li><Link className="item" to={`/indumentaria`}>Indumentaria</Link></li>
                <li><Link className="item" to={`/contacto`}>Contacto</Link></li>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default Navbar