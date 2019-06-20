import React from 'react';
import { Media } from 'reactstrap';


function Actividades() {
    return(
      <div>

          <div className="row actividades">
            <div className="offset-md-1 mr-2 col-md-2 d-block d-sm-none " id="bg-2-lines" >
            </div>

            <div className="col-md-2 d-xl-none">
            </div>

            <div className="offset-md-1 mr-2 col-md-2 d-none d-xl-block " id="bg-2-lines" >
            </div>

            <div className="col-md-4 mr-lg-5 ml-lg-5 d-flex justify-content-center">
              <h2 className="yellow-tittle">ACTIVIDADES</h2>
            </div>

            <div className="col-md-2 ml-2 d-block d-sm-none"  id="bg-2-lines">
            </div>

            <div className="col-md-2 ml-5 d-none d-xl-block"  id="bg-2-lines">
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-12 offset-md-2 col-md-10">

                <div className="imgcontainer">
                  <img className="actividadesimg" src="/assets/images/imgs-03.png"  />
                  <div className="text-block">
                    <ul className="actividadesul">
                      <li>CHORRERAS</li>
                      <li>PISCINA</li>
                      <li>CANOPY</li>
                      <li>PELIS</li>
                      <li>FUTBOL</li>
                      <li>VOLEY</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
      </div>
    );
}

export default Actividades;
