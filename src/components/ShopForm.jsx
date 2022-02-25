import React, { useState, useContext } from "react";
import { useForm } from 'react-hook-form'
import firebase from "firebase";
import { getFirestore } from '../firebase/firebase'
import { contexto } from "../context/CartContext";
import DetailCart from "./DetailCart";
import { Redirect } from "react-router-dom";
import { ErrorMessage } from '@hookform/error-message';

export default function ShopForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function calcularStock(id, stock){
        
        const db = getFirestore();
        const docRef = db.collection("productos").doc(id); 
        docRef.update({stock:stock})
            .then(() => {
                console.log('cambio el stock!');
            })
            .catch((err) => {
                console.log(err);
            }); 
    }
    const { cart, total, clear } = useContext(contexto);
    const [orderId, setOrderId] = useState('');

    const onSubmit = (data) => {
        const db = getFirestore();
        const orders = db.collection("pedidos");
   

        const miOrden = {
            cliente: {
               ...data,
            },
            items: cart,
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        orders.add(miOrden)
            .then(({ id }) => {
                cart.map(item => calcularStock(item.item.id, (item.item.stock-item.quantity)))
                setOrderId(id);
                clear();
                
            })
            .catch((err) => {
                console.log(err);
            });

    }
      //valida que ingrese sólo números
      const onlyNumber = (event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); }}

    return (

        <>    
        {orderId && ( <Redirect to='/thankYou'/>)}

            <div className="container">
  
    <div className="py-5 text-center">
      <h2>Ya casi terminamos...</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
    <div className="row g-5">
      <div className="col-md-5 col-lg-4 order-md-last">
      <DetailCart/>
      </div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Datos Personales</h4>
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">Nombre</label>
              <input className="form-control"   
             {...register('name', { required: 'El nombre de usuario es requerido' })}
              name="name" />
              <ErrorMessage errors={errors} name="name" class="red"  as="p" />
              </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">Apellido</label>
              <input type="text" className="form-control"  {...register('lastname', { required: 'El apellido es requerido' })}
              name="lastname" />
              <ErrorMessage errors={errors} name="lastname" class="red"  as="p" />
            </div>


            <div className="col-12">
              <label for="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="tumail@ejemplo.com"  {...register('email', { required: 'El email es requerido' })} />
              <ErrorMessage errors={errors} name="email" class="red"  as="p" />
            </div>

            <div className="col-12">
              <label for="mobile" className="form-label">Teléfono</label>
              <input type="text" className="form-control" onKeyPress={onlyNumber} id="mobile" name="mobile" placeholder="37312569898" {...register('mobile', { required: 'El celular es requerido' })} />
              <ErrorMessage errors={errors} name="mobile" class="red"  as="p"/>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">Dirección</label>
              <input type="text" className="form-control" id="address" placeholder="Moreno 1215" name="address" {...register('address', { required: 'La dirección es requerida' })} />
              <ErrorMessage errors={errors} name="address" class="red"  as="p" />
            </div>

            <div className="col-md-5">
              <label for="country" className="form-label">Ciudad</label>
              <input type="text" className="form-control" id="city" placeholder="Charata" name="city" {...register('city', { required: 'La ciudad es requerida' })}/>
              <ErrorMessage errors={errors} name="city" class="red"  as="p"/>
            </div>

            <div className="col-md-4">
              <label for="state" className="form-label">Provincia</label>
              <input type="text" className="form-control" id="state" placeholder="Chaco" name="state" {...register('state', { required: 'La provincia es requerida' })} />
              <ErrorMessage errors={errors} name="state" class="red"  as="p"/>
            </div>

            <div className="col-md-3">
              <label for="zip" className="form-label">Código Postal</label>
              <input type="text" className="form-control"  onKeyPress={onlyNumber} id="zip" placeholder=""  name="zip" {...register('zip', { required: 'El CP es requerido' })} />
              <ErrorMessage errors={errors} name="zip" class="red"  as="p" />
            </div>
          </div>
          <div className="col-12 arriba">
            <div className="form-check">
                <input type="checkbox" className="form-check-input" name="promo" {...register('promo')}/>
                <label className="form-check-label" for="same-address">Deseo recibir promociones y descuentos</label>
            </div>
          </div>

             <button  className="w-100 btn btn-primary btn-lg arriba" type="submit">Me lo merezco</button>
         </div>
        </div>
        </form>
    </div>
                                                    
              
      
          
        </>
    );
}