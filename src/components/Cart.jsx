import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "../context/CartContext";
import { ItemCart } from "./ItemCart";


export default function Cart (){
const { cart, removeItem, clear, total } = useContext(contexto);

    return(
        <>
        {(cart.length>0) ?
            <div className="cart-wrap">
		<div className="container">
	        <div className="row">
			    <div className="col-lg-8">
			        <div className="main-heading">Mi carrito</div>
			        <div className="table-cart">
	                    <table>
	                        <thead>
	                            <tr>
	                                <th>Producto</th>
                                    
	                                <th>Cantidad</th>
	                                <th>Total</th>
                                    <th></th>
	                            </tr>
	                        </thead>
	                        <tbody>
                            {cart.map(element=> 
                                <ItemCart element={element}/>
                                )}
	                     
	                        </tbody>
	                    </table>
			        </div>
			    </div>
			    <div className="col-lg-4">
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
			                <div className="btn-cart-totals">
							<Link className="btn btn-sm verde checkout" to={'/shop'} >¡Comprar!</Link>
                               
                                <button className="checkout btn azul">Vaciar Carrito</button>
			                </div>
			            </form>
			        </div>
			    </div>
			</div>
		</div>
	</div>
            :
            <div class="p-5 mb-4 bg-light rounded-3 carritoVacio">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">Ups... No hay productos en tus carritos</h1>
              <p class="col-md-8 fs-4">¿Nos acompañas a ver las plantas que tu hogar necesita? ¡Te lo merecés!</p>
              <Link className="btn btn-lg verde" to={'/'} > Ver productos</Link>
            </div>
          </div>
        }
    </>
    )
} 

