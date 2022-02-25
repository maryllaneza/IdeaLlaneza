import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div class="error-content">
    <div class="container">
        <div class="row">
            <div class="col-md-12 ">
                <div class="error-text">
                    <div class="im-sheep">
                        <div class="top">
                            <div class="body"></div>
                            <div class="head">
                                <div class="im-eye one"></div>
                                <div class="im-eye two"></div>
                                <div class="im-ear one"></div>
                                <div class="im-ear two"></div>
                            </div>
                        </div>
                        <div class="im-legs">
                            <div class="im-leg"></div>
                            <div class="im-leg"></div>
                            <div class="im-leg"></div>
                            <div class="im-leg"></div>
                        </div>
                    </div>
                    <h4>Ups... Parece que no encontramos la página</h4>
                    <p>Lo sentimos, pero la página que estás buscando, al parecer no existe.</p>
                    <Link className="btn btn-lg verde" to={'/'} >Inicio</Link>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default NotFound