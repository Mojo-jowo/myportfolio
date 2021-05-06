import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';


function Navbar() {
    return (
        <>
        <nav className="navbar-container">
            <div className="menu-icon">
                <NavLink to="/" className="navbar-logo">
                    Mojo
                </NavLink>
            </div>

            <ul className="nav-menu">
                <li className="nav-items">
                    <NavLink to="/" className="nav-links">
                        Home
                    </NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/about" className="nav-links">
                        About
                    </NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/skills" className="nav-links">
                        Skills
                    </NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/projects" className="nav-links">
                        Projects
                    </NavLink>
                </li>
            </ul>

            <div className="socials">
                <h1>Kwani whats up ?</h1>
            </div>

        </nav>

        </>
    )
}

export default Navbar
