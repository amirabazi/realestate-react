import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [hamburger, setHamburger] = useState(false);

    const toggleHamburger = () => {
        setHamburger(value => !value);        
    }

    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    useEffect(() => {
        changeBackground();
        window.addEventListener('scroll', changeBackground);
    })

    return (
        <nav className={navbar ? 'navBarActive' : 'navBar'}>
            <div className='navLeft'>
                <Link to='/' className='appName'>BobBuilder</Link>
            </div>
            <div onClick={toggleHamburger} className='hamburgerMenu'>|||</div>
            <div className={hamburger ? "hamActive" : "navRight"}>
                <a href="#topdiv" className='navSelect'>Home</a>
                <a href='/#aboutdiv' className='navSelect'>About</a>
                <a href='/#contactdiv' className='navSelect'>Contact</a>                
            </div>
        </nav>
    )
}

export default Navbar
