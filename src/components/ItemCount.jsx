import { useState } from "react";

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

    const agregarItem = () => {
        console.log("agrego item")
        onAdd(cantidad)
    }
    return(
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
                    <button className="btn btn-sm verde" onClick={agregarItem}>Agregar al Carrito</button>
                    </div>
                </div>
    )
}