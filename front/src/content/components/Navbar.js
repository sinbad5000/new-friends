import React from 'react'
import { NavLink, Link } from 'react-router-dom'


const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">New Friends</Link>
                <div className="collapse navbar-collapse"></div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to='/Profile'>Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  to='/Request'>Request</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  to='/Freinds'>Friends</NavLink>
                        </li>
                        <li>
                        <NavLink className="nav-link" to='/Main'> Main</NavLink>
                        </li>
                    </ul>
            </div>
        </nav>


    )  
}


export default Navbar