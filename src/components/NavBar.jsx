import React from "react";
import CartWidget from "./CartWidget";
import logo from "../logofotosintesis.png";
import { NavLink } from "react-router-dom";


export default function NavBar (){
    return(
      <nav className="navbar navbar-expand-md navbar-dark fixed-top menu">
      <div className="container-fluid">
        <img src={logo} alt="fotosintesis" className="logo"/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/category/interior'} >Interior</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/category/exterior'} >Exterior</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/category/suculentas-cactus'} >Suculentas y Cactus</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/category/deconatural'} >DecoNatural</NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <CartWidget/>
          </form>
        </div>
      </div>
    </nav>
    )
}
