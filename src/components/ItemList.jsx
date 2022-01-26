import Item from "./Item";


export default function ItemList ({plantas}){

    return(
       <>
          {plantas.map(item=> <Item item={item}></Item> )}
      
      </>
    )
} 

