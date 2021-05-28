import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {

    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
      
          // Add a click event on each of them
          $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
      
              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);
      
              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
      
            });
          });
        }
      
      });
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
                    <Link to="/" className="navbar-item">
                        Home
                    </Link>
                    <Link to="/createevent" className="navbar-item" style={{textDecoration: "none"}}>
                        Create Event
                    </Link>
                    </div>
                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="LandS">
                        <Link to="/createaccount" className="LandS" style={{textDecoration: "none"}}>
                            <strong> Sign up | </strong>
                        </Link>
                        <Link to="/login" className="LandS" style={{textDecoration: "none"}}>
                            Log in 
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
