import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer (){
    const planta1 = {
            id:1,
            title:"Monstera",
            description:"Monstera deliciosa, llamada comúnmente cerimán o costilla de Adán, es una especie de planta trepadora de la familia Araceae, endémica de selvas tropicales, que se distribuye desde el centro y sur de México hasta el norte de Argentina.",
            price:890.00,
            pictureUrl: "https://static.turbosquid.com/Preview/001159/128/11/monstera-3D_Z.jpg",
            stock:5
    }

    const [item, setItem] = useState({});

    useEffect(()=>{
        const getItem = new Promise ((resolve, reject)=>{
            setTimeout(function(){
                resolve(planta1);
            }, 2000);
        })
        getItem
        .then(res=>{
            setItem(res);
        })
        .catch(err => {
            console.log("ocurrió un error" , err);
        });

    }, []);
    return(
       <div className="row">
      <ItemDetail item={item}/>
      </div>
    )
} 

