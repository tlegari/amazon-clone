import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'> 
     <Link to="./home" activeClassName= 'active'>Home</Link>
     <Link to="./cart" activeClassName= 'active'>Cart</Link>
     <Link to="./login" activeClassName= 'active'>Login</Link>
     <Link to="./products" activeClassName= 'active'>Products</Link>
    </nav>
  );
};

export default Navbar