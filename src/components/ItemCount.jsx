import React, { useState } from "react";


export default function ItemCount ({stock, initial, onAdd}){
    const [cantidad, setCantidad] = useState(initial);

    const sumar = ()=>{
        if(cantidad<stock){
            setCantidad(cantidad+1)
        }

    }
    const restar = ()=>{
        if(cantidad>0){
            setCantidad(cantidad-1)
        }
    }
 //Configurar si viene 0 que no muestre nada y no haya stock
 
    return(     
        <>
        {
            (initial>0)?
            <div className="container counter">
            <div className="row">
               <div className="col-sm-4">
                    <div className="input-group mb-3">
                       <div className="input-group-prepend">
                           <button className="btn btn-sm verde" id="minus-btn" onClick={restar}><i className="fa fa-minus"></i></button>
                       </div>
                       <div className="cantidad">{cantidad}</div>
                       <div className="input-group-prepend">
                           <button className="btn btn-sm verde" id="plus-btn" onClick={sumar}><i className="fa fa-plus"></i></button>
                       </div>
                   </div> 
               </div>
           </div>
           <div className="col-sm-3">
           <button className="btn btn-sm verde" onClick={()=>onAdd(cantidad)}>Agregar al Carrito</button>
           </div>
            </div>
            :
            <div className="container counter">
            <div className="row">
               <div className="col-sm-4">
               <button className="btn btn-sm btn-danger disabled"><i className="fa fa-meh-o" /> No hay stock</button>
               </div>
           </div>
            </div>
        }
    </>
    )
}

