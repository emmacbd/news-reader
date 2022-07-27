import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
 return (
    <nav className="navbar">
         <Link to="/">NEW YORK TIMES NEWS READER</Link>  
    </nav>
 )
}

export default NavBar;