import React from "react";
/* import ItemCount from "./ItemCount"; */
import { Link } from "react-router-dom";


export default function Item ({item}){
    return(
    
       <div className="col-md-3 col-sm-6 etiqueta">
        <div className="card listado">
            <img src={item.pictureUrl} className="card-img-top" alt="planta"/>
            <div className="card-body">
                <h5 className="card-title"><strong>{item.title}</strong></h5>
                <p className="card-text">${item.price}</p>
      
            <Link className="btn detalle" to={'/detail/'+item.id} >Ver detalle</Link>
            <p className="card-text">
                Stock: {item.stock}
                </p>
            </div>
        </div>
        </div>

       /* <ItemCount stock={item.stock} initial={1} onAdd="onAdd"/> */
        
    )
}