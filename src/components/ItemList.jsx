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
            pictureUrl: "https://static.turbosquid.com/Preview/001229/665/EG/3D-plant-012---ficus_600.jpg",
            stock:10
        },
        {
            id:3,
            title:"Strelitzia",
            description:"oporta temperaturas altas, los exteriores sin sol directo, los interiores o la sombra, no necesita mucho riego y tiene hoja perenne. Recuerdan a los bananeros por sus hojas y se ven tanto en parterres de algunas ciudades mediterráneas como en hoteles y salones.  La versión Strelitzia Nicolai puede superar los 10 metros de altura y algunas de sus hojas llegar al metro. Para formentar su crecimiento lo ideal es trasplantarlas a un tiesto mayor y pulverizar sus hojas todo el año.",
            price:1530.00,
            pictureUrl: "https://static.turbosquid.com/Preview/2020/02/27__08_09_05/render3.png98910B4D-F586-4CBC-BF3D-B72DF1CB15EADefaultHQ.jpg",
            stock:3
        },
        {
            id:4,
            title:"Zamioculca",
            description:"Se destaca por su porte atípico y moderno y por sus hojas compuestas por un tallo grueso y foliolos redondos de color verde oscuro y con un brillo muy característico. Necesita poca luz, incluso con la artificial le basta, y poca agua, basta con un riego moderado y dejando secar la tierra entre riego y riego. El único pero son sus raíces, muy voluminosas, que requerirán que la planta sea trasplantada cada dos años a un tiesto de mayor para favorecer su adecuado crecimiento.",
            price:1220.00,
            pictureUrl: "https://static.turbosquid.com/Preview/2020/06/01__04_32_43/RENDER1.png662CCE98-51C6-452A-BFE0-436A63FC4744DefaultHQ.jpg",
            stock:3
        }
    ]

    const [plantasArray, setPlantasArray] = useState([]);
    const [carga, setCarga] = useState(false);

    useEffect(()=>{
        const listarProd = new Promise ((resolve, reject)=>{
            setTimeout(function(){
                resolve(plantas);
            }, 2000);
        })
        listarProd
        .then(res=>{
            setPlantasArray(res);
            setCarga(true);
        })
        .catch(err => {
            console.log("ocurrió un error" , err);
            setCarga(true);
            
        });

    }, []);
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

