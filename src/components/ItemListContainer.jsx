import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import loading from "../loading.svg";
import { useParams } from "react-router-dom";
import { getFirestore } from '../firebase/firebase'

export default function ItemListContainer (){
  const [plantasArray, setPlantasArray] = useState([]);
  const [carga, setCarga] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    const fireBase = getFirestore();
    const itemCollection = category?fireBase.collection("productos").where('category', '==', category):fireBase.collection("productos");

    
    itemCollection.get()
      .then((querySnapShot) => {
        setCarga(true); 
        setPlantasArray(querySnapShot.docs.map((doc)=> {
            return { id: doc.id, ...doc.data() }
        }  
        ));
        
      })
      .catch((err)=>{
        console.log(err);
        setCarga(true); 
      })
  }, [category])
    return(
      <>
     {(carga) ?
          <div className="row contenedorProd">
          {
         <ItemList plantas={plantasArray}></ItemList>}</div>
          :
          <img src={loading} alt="loading" className="loading"/> 
      } 
      </>

    )
}