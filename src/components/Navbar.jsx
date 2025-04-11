import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
  const currentPath = window.location.pathname;
  return (
    <div>
    <div className="header">
      <a href="#" className="logo">
        <i className="fas fa-dumbbell" /> DOUUMA GYM
      </a>
      <nav className="navbar">
        <Link
          to="/"
          className={currentPath === '/' ? 'active-link' : ''}
        >
          Home
        </Link>
        <Link
          to="/Cards"
          className={currentPath === '/Cards' ? 'active-link' : ''}
        >
          Activités
        </Link>
        <Link
          to="/Login"
          className={currentPath === '/Login' ? 'active-link' : ''}
        >
          Login
        </Link>
        <Link
          to="/SingUp"
          className={currentPath === '/SingUp' ? 'btn active-link' : ''}
        >
          Sign Up
        </Link>
      </nav>
    </div>
  </div>

  )
}

export default Navbar