import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import {useParams } from 'react-router-dom';
import loading from "../loading.svg";
import { getFirestore } from '../firebase/firebase'

export default function ItemDetailContainer (){
    const { itemId } = useParams();
     const [item, setItem] = useState({}); 
     const [carga, setCarga] = useState(false);


    useEffect(() => {

        const db = getFirestore();
        const itemCollection = db.collection("productos");
        const miItem = itemCollection.doc(itemId);
    
        miItem.get()    
          .then((doc) => {
    
            if (!doc.exists) {
              console.log('no existe ese documento');
            }
    
            console.log('item found');
            setItem({ id: doc.id, ...doc.data() });
            setCarga(true);
    
          })
          .catch((err)=>{
            console.log(err);
            setCarga(true);
          })
      }, [itemId])
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

