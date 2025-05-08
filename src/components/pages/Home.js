// src/components/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-section">
                <h1>Anderson Stockdale</h1>
                <p className="tagline">Java & Python Software Engineer | Computer Science Graduate | Collaborative Team Leader | Process Automation</p>
                <div className="cta-buttons">
                    <Link to="/portfolio" className="cta-button primary">View My Work</Link>
                    <Link to="/contact" className="cta-button secondary">Get In Touch</Link>
                </div>
            </div>

            <section className="highlight-section">
                <h2>What I Do</h2>
                <div className="highlights">
                    <div className="highlight-card">
                        <h3>Skill 1</h3>
                        <p>Brief description of your first key skill or service.</p>
                    </div>
                    <div className="highlight-card">
                        <h3>Skill 2</h3>
                        <p>Brief description of your second key skill or service.</p>
                    </div>
                    <div className="highlight-card">
                        <h3>Skill 3</h3>
                        <p>Brief description of your third key skill or service.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;