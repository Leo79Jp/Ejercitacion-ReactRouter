import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        {/* Aqui deberan agregar los Links */}
        <ul>
          <Link to={'/'} ><li>Home</li></Link>
          <Link to={'/contacto'}><li>contacto</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar