import React from "react";
import CartWidget from "./CartWidget";


export default function NavBar (){
    return(
        <div className="container">
  <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Inicio</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Interior</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Exterior</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Suculentas y Cactus</a></li>
        <li className="nav-item"><a href="#" className="nav-link">DecoNatural</a></li>
      </ul>
      <div className="col-md-3 text-end carrito">
      <CartWidget/>
</div>
    </header>
    
  </div>
    )
}
