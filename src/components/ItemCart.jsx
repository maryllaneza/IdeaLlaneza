import React, { useContext } from 'react';
import { contexto } from '../context/CartContext';

export const ItemCart = ({element}) => {

    const { removeItem } = useContext(contexto);
  return <tr>
  <td>
      <div className="display-flex align-center">
          <div className="img-product">
            <img src={element.item.pictureUrl} alt="prod"/>   
          </div>
          <div className="name-product">
              {element.item.title}
          </div>
          <div className="price">
              $ {element.item.price}
          </div>
      </div>
  </td>
  <td className="product-count">
  <div >
         {element.quantity}
      </div>
  </td>
  <td>
      <div className="total">
    $ {element.quantity*element.item.price}
      </div>
  </td>
  <td>
  <button type="button" class="btn-close" aria-label="Close"  onClick={()=>removeItem(element.item.id)}></button>

  </td>
</tr>;
};
