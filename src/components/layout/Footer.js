import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-links">
                    <a href="https://github.com/andersganders" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/andersonstockdale" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    {/* Add more social links as needed */}
                </div>
                <p>&copy; {year} Anderson Stockdale. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;