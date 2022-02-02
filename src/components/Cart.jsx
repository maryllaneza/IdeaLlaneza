import React, { useContext } from "react";
import { contexto } from "../context/CartContext";


export default function Cart (){
const { cart, removeItem,clear } = useContext(contexto);
console.log(cart.length);

    return(
       <>
       <h2>Próximamente un carrito más lindo</h2>
          {cart.map(element=> 
          <>
         {/*  HAcer un componente para mostrar cada item */}
          <p> {element.item.title} </p>
          <p> {element.quantity} </p>
          <button onClick={()=>removeItem(element.item.id)}>Eliminar este artículo</button>
          </>
          )}
      {cart.length>0 && <button onClick={()=>clear()}>Limpiar carrito</button>}
      </>
    )
} 

