import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import me from './images/me.jpg';


function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const Mailto = ({ email, subject = '', body = '', children }) => {
    //     let params = subject || body ? '?' : '';
    //     if (subject) params += `subject=${encodeURIComponent(subject)}`;
    //     if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
      
    //     return <a href={`mailto:${email}${params}`} rel="noreferrer" target="_blank">{children} </a>;
    //   };

    return (
        <>
        <nav className="navbar-container">
            <div className="menu-icon">
                <NavLink to="/" className="navbar-logo">
                    <img src={me} alt="" className="mebar" />
                    <span className="name">MOJO</span> 
                </NavLink>
                <section className="menubar">
                    <i class= {click ? "fas fa-times" : "fas fa-bars"} onClick={handleClick}></i>
                </section>
            </div>

            <ul className={click ? 'nav-menu active' : "nav-menu"}>
                <li className="nav-items">
                    <NavLink to="/" className="nav-links" activeClassName="selected1" onClick={closeMobileMenu}>
                        Home
                    </NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/about" className="nav-links" activeClassName="selected2" onClick={closeMobileMenu}>
                        About
                    </NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/skills" className="nav-links" activeClassName="selected3" onClick={closeMobileMenu}>
                        Skills
                    </NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/projects" className="nav-links" activeClassName="selected4"onClick={closeMobileMenu}>
                        Projects
                    </NavLink>
                </li>
            </ul>

            <div className={click ? "socials active" : "socials"}>
                <NavLink to="" className="social-item">
                    <i class="fab fa-twitter"></i>
                </NavLink>
                {/* <Mailto email="ojowoandrew@gmail.com" subject="" body=""  className="social-item">
                    <i class="fas fa-envelope"></i>
                </Mailto> */}
                <NavLink to="" className="social-item">
                    <p className="reachout">Reach out!</p>
                </NavLink>
            </div>

        </nav>

        </>
    )
}

export default Navbar
