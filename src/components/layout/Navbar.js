import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Anderson Stockdale</Link>
            </div>
            <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/about" onClick={toggleMenu}>About</Link>
                <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;