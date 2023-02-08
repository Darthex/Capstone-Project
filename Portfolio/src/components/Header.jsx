import React from "react";
import logo from "../images/darthex.png";

export default function Header() {

    function handleNav() {
        document.body.classList.toggle('nav-open');
    }
    function handleNavLink() {
        document.body.classList.remove('nav-open');
    }

    return(
        <header>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <button className="nav-toggle" aria-label="toggle navigation" onClick={handleNav}>
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home" className="nav__link" onClick={handleNavLink}>Home</a></li>
                    <li className="nav__item"><a href="#services" className="nav__link" onClick={handleNavLink}>My Interests</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link" onClick={handleNavLink}>About me</a></li>
                    <li className="nav__item"><a href="#work" className="nav__link" onClick={handleNavLink}>My Work</a></li>
                </ul>
            </nav>
        </header>
    )
}