import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "../context/CartContext";


export default function CartWidget (){
    const { cart } = useContext(contexto);
    return(
        <>
        <Link to={"/cart"}><i className="fa fa-shopping-cart"></i> {cart.length}</Link>
        </>
    )
}