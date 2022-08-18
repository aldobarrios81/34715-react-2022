import React from 'react';
import CartWidget  from '../Components/CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Aldo Barrios</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
         
          <li className="nav-item">
            <a className="nav-link" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Servicios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
          <li>
          <CartWidget />
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav>
    );
}

export default NavBar;
