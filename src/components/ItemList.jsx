import React, {useEffect, useState} from "react";
import Item from "./Item";
import loading from "../loading.svg";

export default function ItemList (){
    const plantas = [
        {
            id:1,
            title:"Monstera",
            description:"Monstera deliciosa, llamada comúnmente cerimán o costilla de Adán, es una especie de planta trepadora de la familia Araceae, endémica de selvas tropicales, que se distribuye desde el centro y sur de México hasta el norte de Argentina.",
            price:890.00,
            pictureUrl: "https://static.turbosquid.com/Preview/001159/128/11/monstera-3D_Z.jpg",
            stock:5
        },
        {
            id:2,
            title:"Pandurata",
            description:"Ficus lyrata, comúnmente conocido como higuera hoja de violín, es una especie de planta con flores perteneciente a la familia Moraceae.",
            price:1050.00,
            pictureUrl: "https://cdn.shopify.com/s/files/1/0062/0521/0712/products/Ficus_pandurata-lyrata_maceta_blanca_2048x2048.jpg?v=1593402446",
            stock:10
        },
        {
            id:3,
            title:"Rosa del Desierto",
            description:"La rosa del desierto es una roca sedimentaria evaporítica formada en los desiertos, de ahí su nombre, cuando se forman diversas capas de yeso, agua y arena.",
            price:1530.00,
            pictureUrl: "https://noticiasdelaciencia.com/upload/images/11_2018/7113_adenium-31.jpg?38",
            stock:3
        },
        {
            id:4,
            title:"Rosa del Desierto",
            description:"La rosa del desierto es una roca sedimentaria evaporítica formada en los desiertos, de ahí su nombre, cuando se forman diversas capas de yeso, agua y arena.",
            price:1530.00,
            pictureUrl: "https://noticiasdelaciencia.com/upload/images/11_2018/7113_adenium-31.jpg?38",
            stock:3
        }
    ]

    const [plantasArray, setPlantasArray] = useState([]);
    const [carga, setCarga] = useState(false);
    const listarProd = new Promise ((resolve, reject)=>{
        setTimeout(function(){
            resolve(plantas);
            console.log(plantas);
        }, 2000);
    })
    useEffect(()=>{
        listarProd
        .then(res=>{
            setPlantasArray(res);
            setCarga(true);
        })
        .catch(err => {
            console.log("ocurrió un error" , err);
            setCarga(true);
            
        });

    });
    return(
       <>
      {(carga) ?
          <div className="row">
          {
          plantasArray.map(item=> <Item item={item} /> )}</div>
          :
          <img src={loading} alt="loading"/> 
      }
      </>
    )
} 

