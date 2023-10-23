import React from 'react';
import './style/Nav.css';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='Nav'>
            <span>
                <Link to="/">
                    <h2>Logo</h2>
                </Link>
            </span>
            <input type="checkbox" id='Bugger' hidden />
            <span className='Navbar'>
                <ul>
                    <li><Link className='Link' to="/">Home</Link></li>
                    <li><Link className='Link' to="/login">Login</Link></li>
                    <li><Link className='Link' to="/signin">Register</Link></li>
                </ul>
            </span>
            <label htmlFor="Bugger" className='Bugger'>
                <ion-icon className='Bugger navLogo' name="menu-outline"></ion-icon>
            </label>
        </div>)
}

export default Nav;