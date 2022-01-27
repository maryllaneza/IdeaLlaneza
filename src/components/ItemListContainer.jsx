import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import loading from "../loading.svg";
import { useParams } from "react-router-dom";

export default function ItemListContainer (){
  const [plantasArray, setPlantasArray] = useState([]);
  const [carga, setCarga] = useState(false);
  const { category } = useParams();
  useEffect(()=>{
      fetch('https://run.mocky.io/v3/d9680c49-def3-46c8-a2ac-5418bc8c50e9')
      .then(response => response.json())
      .then(res=>{
        category===undefined? setPlantasArray(res): setPlantasArray(res.filter(item => item.category == category));
        setCarga(true);
      })
      .catch(err => {
          console.log("ocurrió un error" , err);
          setCarga(true); 
      });

  }, [category]);
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