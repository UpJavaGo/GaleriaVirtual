import React, { Fragment } from 'react'
import MetaData from './Layout/MetaData'

export const Home = () => {
  return (
    <Fragment>
        <MetaData>title="La mejor inversion"</MetaData>
        <h1 id="encabezado_productos">Ultimas Obras</h1>

        <section id="productos" className='container mt-5'>
            <div className='row'>
                {/*Producto 1*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/hermo1.png' alt="hermo1"></img>
                        <div className='card-body d-flex flex-column'>
                          <h5 id="titulo_producto"><a href='http://localhost:3000'>Pintura al Oleo</a></h5>
                          <div className='rating mt-auto'>
                              <div className='rating-outer'>
                                  <div className='rating-inner'></div>
                              </div>
                              <span id='No_de_opiniones '>5 reviews</span>
                          </div>
                          <p className='card-text'>$1.250.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                              Ver detalle
                          </a>                          
                        </div>
                    </div>
                </div>
                {/*Producto 2*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/hermo2.png' alt="hermo2"></img>
                        <div className='card-body d-flex flex-column'>
                          <h5 id="titulo_producto"><a href='http://localhost:3000'>Pasteles</a></h5>
                          <div className='rating mt-auto'>
                              <div className='rating-outer'>
                                  <div className='rating-inner'></div>
                              </div>
                              <span id='No_de_opiniones '>3 reviews</span>
                          </div>
                          <p className='card-text'>$1.380.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                              Ver detalle
                          </a>                          
                        </div>
                    </div>
                </div>
                {/*Producto 3*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/hermo3.png' alt="hermo3"></img>
                        <div className='card-body d-flex flex-column'>
                          <h5 id="titulo_producto"><a href='http://localhost:3000'>Carboncillo</a></h5>
                          <div className='rating mt-auto'>
                              <div className='rating-outer'>
                                  <div className='rating-inner'></div>
                              </div>
                              <span id='No_de_opiniones '>6 reviews</span>
                          </div>
                          <p className='card-text'>$2.500.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                              Ver detalle
                          </a>                          
                        </div>
                    </div>
                </div>
                {/*Producto 4*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/hermo4.png' alt="hermo4"></img>
                        <div className='card-body d-flex flex-column'>
                          <h5 id="titulo_producto"><a href='http://localhost:3000'>Acuarela</a></h5>
                          <div className='rating mt-auto'>
                              <div className='rating-outer'>
                                  <div className='rating-inner'></div>
                              </div>
                              <span id='No_de_opiniones '>2 reviews</span>
                          </div>
                          <p className='card-text'>$550.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                              Ver detalle
                          </a>                          
                        </div>
                    </div>
                </div>
             </div>
        </section>

    </Fragment>
  )
}

