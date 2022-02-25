import React from 'react'
import { Link } from 'react-router-dom'

function ThankYou() {
  return (
    <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">¡Felicitaciones! ¡Tu pedido está confirmado!</h1>
      <p class="col-md-8 fs-4">En las próximas 24hs te vamos a contactar para realizar el envío y el pago.</p>
      <Link className="btn btn-lg verde" to={'/'} >¿Quedaste con ganas de un poquito más?</Link>
    </div>
  </div>
  )
}

export default ThankYou