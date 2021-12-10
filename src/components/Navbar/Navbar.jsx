import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
import React from 'react'

function Navbar({ counter }) {
    return (
        <nav className="navbar">
            <Link className="nav-logo" to={`/`}><img className="logo" src="logolddlh.svg" alt="logo"/></Link>
            <ul className="nav-list">
                <li><Link className="item" to={`/`}>Inicio</Link></li>
                <li><Link className="item" to={`/`}>Indumentaria</Link></li>
                <CartWidget counter={counter} />
            </ul>
        </nav>
    )
}

export default Navbar