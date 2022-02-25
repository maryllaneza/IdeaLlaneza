import React, { useContext } from 'react';
import { contexto } from '../context/CartContext';

export const ItemCartWidget = ({element}) => {
    const { removeItem } = useContext(contexto);
  return(
  <li>
  <span className="item">
    <span className="item-left">
        <img src={element.item.pictureUrl} alt="prod" className="img-thumbnail img-fluid img-carrito"/> 
        <span className="item-info">
            <span>{element.item.title}</span>
            <span>${element.item.price}</span>
        </span>
    </span>
    <span className="item-right">
    <button type="button" class="btn-close  pull-right" aria-label="Close"  onClick={()=>removeItem(element.item.id)}></button>
    </span>
</span>
</li>
  )};
