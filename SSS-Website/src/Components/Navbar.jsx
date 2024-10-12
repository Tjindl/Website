import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='nav'>
            <a href='/' className='site-title'>Shiv Shakti Shuttering</a>
            <ul>
                <li href="/pricing">Pricing</li>
                <li href="/about">About us</li>
                <li href="/contact">Contact us</li>
            </ul>
        </nav>
    );
}

export default Navbar;