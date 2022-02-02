import React, {createContext, useState} from "react";

export const contexto= createContext();
//no dejar que agregue más de lo que hay en stock
export default function CartContext({children}){

    const [cart, setCart] = useState([]);
    
     function addItem(item, quantity){
        if(isInCart(item.id)){
            const itemToFind = cart.findIndex(element => element.item.id ===item.id);
            //verifica que el total no sea mayor al stock disponible
            (cart[itemToFind].quantity+quantity>cart[itemToFind].item.stock)? alert ("Supera el stock dispo"): cart[itemToFind].quantity+=quantity;
            setCart([...cart]);
          }
          else{
            setCart([...cart, {item, quantity}]);
          } 
       
    } 
     function removeItem(itemId){
            setCart(cart.filter(element=>element.item.id !==itemId));
     }
        
    
    function clear(){
        setCart([]);
    }  
     function isInCart(itemId){
        return cart.some(element=>element.item.id===itemId)
    } 
    return (
        <>
        <contexto.Provider value={{cart, addItem, removeItem, clear}}>
            {children}
        </contexto.Provider>
        </>
    )
}