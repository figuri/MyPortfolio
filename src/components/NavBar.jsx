import React from 'react';
import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <nav>
            <h1 className="myName">Samuel Thomas</h1>
            <ul className='nav-links'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/resume'>Resume</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;