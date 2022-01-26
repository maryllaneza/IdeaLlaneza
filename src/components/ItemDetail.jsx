import React from "react";
import ItemCount from "./ItemCount";


export default function ItemDetail ({item}){
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
                          <ItemCount stock={item.stock} initial={1} onAdd="onAdd"/> 
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
       
        
    )
}