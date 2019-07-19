import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return(
        <div id="head-nav">
            <ul className="nav">
                {
                    /*
                        navlink provides "active" class to corresponding link tag while link does not
                    */
                }
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar