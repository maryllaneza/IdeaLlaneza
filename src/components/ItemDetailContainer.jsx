import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import {useParams } from 'react-router-dom';
import loading from "../loading.svg";

export default function ItemDetailContainer (){
    const { itemId } = useParams();
     const [item, setItem] = useState({}); 
     const [carga, setCarga] = useState(false);
    let prodSelected = {};

    useEffect(()=>{
            fetch('https://run.mocky.io/v3/d9680c49-def3-46c8-a2ac-5418bc8c50e9')
            .then(response => response.json())
            .then(res=>{
                prodSelected = res.filter(item => item.id == itemId);
                setItem({...prodSelected[0]});
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
             <div className="row contenedorProd">
             {
               <ItemDetail item={item}/>}</div>
             :
             <img src={loading} alt="loading" className="loading"/> 
         } 
         </>
    )
} 

