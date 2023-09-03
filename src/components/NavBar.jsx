import React from 'react';
import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <nav>
            <h1 className="myName">Samuel Thomas</h1>
            <ul className='nav-links'>
                <li className="navLink">
                    <Link to='/'>Home</Link>
                </li>
                <li className="navLink"> 
                    <Link to='/about'>About</Link>
                </li>
                <li className="navLink">
                    <Link to='/contact'>Contact</Link>
                </li>
                <li className="navLink">
                    <Link to='/resume'>Resume</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;