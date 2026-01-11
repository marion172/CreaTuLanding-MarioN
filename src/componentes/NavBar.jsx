import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">

            <div className="logo-container">
                <span className="logo-top">CODER</span>
                <span className="logo-bottom">HOGAR</span>
            </div>
            
            <div className="links-container">
                <a href="#" className="link">Electrodomesticos</a>
                <a href="#" className="link">Electronica</a>
                <a href="#" className="link">Muebleria</a>
                <a href="#" className="link">Colchoneria</a>
            </div>
            
            <CartWidget />
        </nav>
    );
}

export default NavBar;