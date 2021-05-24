import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                   
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    <a className="navbar-item">
                        Home
                    </a>
                    <a className="navbar-item">
                        Create Event
                    </a>
                    </div>
                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="LandS">
                        <a href="/createaccount" className="LandS">
                            <strong> Sign up | </strong>
                        </a>
                        <a href="/login" className="LandS">
                            Log in 
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
