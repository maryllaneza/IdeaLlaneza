import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { contexto } from "../context/CartContext";


export default function ItemDetail ({item}){
	const [prodCart, setProdCart ] =useState(false);
	const {addItem} =useContext(contexto);
	const onAdd = (cantidad) => {
        console.log("agrego cantidad: ",cantidad);
		setProdCart(cantidad>0);
		addItem(item, cantidad);
    }
    return(
        <div className="container">
		<div className="card card-detalle">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <img src={item.pictureUrl} alt="prod"/>
					
						</div>
					
						
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">{item.title}</h3>
						<div className="rating">
							<div className="water">
                                    <span className='fa fa-tint'></span>
                                    <span className='fa fa-tint'></span>
                                    <span className='fa fa-tint'></span>
							</div>
						</div>
						<p className="product-description">{item.description}</p>
						<h4 className="price"><span>$ {item.price}</span></h4>
						<div className="action">
							{(!prodCart)?
							 <ItemCount stock={item.stock} initial={item.stock>0?1:0} onAdd={onAdd}/> 
							 :
							 <div className="col-sm-3">
							<Link className="btn btn-sm verde" to={'/cart'} ><i className="fa fa-shopping-cart"></i> Terminar compra</Link>
							 </div>
						
						}
                         
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
       
        
    )
}