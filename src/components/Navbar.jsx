import React from 'react'
import "./Navbar.css"

function Navbar() {
  const currentPath = window.location.pathname;
  return (
    <div>
    <div className="header">
      <a href="#" className="logo">
        <i className="fas fa-dumbbell" /> DOUUMA GYM
      </a>
      <nav className="navbar">
        <a
          href="/Home"
          className={currentPath === '/Home' ? 'active-link' : ''}
        >
          Home
        </a>
        <a
          href="/Cards"
          className={currentPath === '/Cards' ? 'active-link' : ''}
        >
          Activités
        </a>
        <a
          href="/Login"
          className={currentPath === '/Login' ? 'active-link' : ''}
        >
          Login
        </a>
        <a
          href="/SingUp"
          className={currentPath === '/SingUp' ? 'btn active-link' : ''}
        >
          Sign Up
        </a>
      </nav>
    </div>
  </div>


  )
}

export default Navbar