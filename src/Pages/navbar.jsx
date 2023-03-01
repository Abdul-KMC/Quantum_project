import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
          <a className="navbar-brand" href="/login">Quantum</a>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link" to="/table">Table</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
