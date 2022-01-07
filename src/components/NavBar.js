import React from "react";
import CartWidget from "./CartWidget";


export default function NavBar (){
    return(
        <div class="container">
  <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Inicio</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Interior</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Exterior</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Suculentas y Cactus</a></li>
        <li class="nav-item"><a href="#" class="nav-link">DecoNatural</a></li>
      </ul>
      <div class="col-md-3 text-end carrito">
      <CartWidget/>
</div>
    </header>
    
  </div>
    )
}
