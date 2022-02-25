import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { contexto } from '../context/CartContext';

function DetailCart() {
    const { total } = useContext(contexto);
    const actualPath = useLocation();
  return (
    <div className="cart-totals">
    <h3>Sacá la cuenta...</h3>
    <form action="#" method="get" accept-charset="utf-8">
        <table>
            <tbody>
                <tr>
                    <td>Subtotal</td>
                    <td className="subtotal">$ {total}</td>
                </tr>
                <tr>
                    <td>Envío</td>
                    <td className="free-shipping">Envío gratuito</td>
                </tr>
                <tr className="total-row">
                    <td>Total</td>
                    <td className="price-total">$ {total}</td>
                </tr>
            </tbody>
        </table>
        {actualPath.pathname==="/cart" && ( 
        <div className="btn-cart-totals">
            <Link className="btn verde checkout" to={'/shop'} >¡Comprar!</Link>
            <button className="checkout btn azul">Vaciar Carrito</button>
        </div>)}
       
    </form>
</div>
  )
}

export default DetailCart