import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "../context/CartContext";
import { ItemCartWidget } from "./ItemCartWidget";


export default function CartWidget (){
    const { cart, countCart } = useContext(contexto);
    return(
        <>
         <li className="dropdown widget" style={{ visibility: cart.length>0? 'visible': 'hidden'}}>
             <div className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
         <Link to={"/cart"} className="widgetLink"><i className="fa fa-shopping-cart"></i> {countCart}</Link>
            </div>
          <ul className="dropdown-menu dropdown-cart vistaPreviaCarrito" role="menu">
          {cart.map(element=> <ItemCartWidget element={element}/>)}
              <li className="divider"></li>
              <li><Link style={{"margin-left": "10px"}} className="btn btn-sm verde" to={'/cart'} ><i className="fa fa-shopping-cart"></i> Ver Carrito</Link></li>
          </ul>
        </li>
        </>
    )
}