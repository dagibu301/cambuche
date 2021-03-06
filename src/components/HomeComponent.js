import React from 'react';
import { Media } from 'reactstrap';
import Hospedaje from './HospedajeComponent';
import Actividades from './ActividadesComponent';
import Galeria from './GaleriaComponent';



function Home() {
    return(
      <div>
         <div id="main-bg">
         </div>

         <div className="row">
          <div className="col-12 offset-md-1  col-lg-6">
            <div id="bg-1"></div>
          </div>

          <div className="col-10 col-lg-4 ml-5 mont">
              <div className="">
                <Media object src='/assets/images/montana.png' alt='montanta' />
              </div>

              <div className="text">
                <p>Somos una nueva experiencia en
                  un rincón de San Antonio,
                  Jamundí, donde conectamos,
                  respiramos y vivimos con la
                  naturaleza. </p>
                <p>Los atardeceres del valle, la vista
                  hacia la Reserva Farallones y las
                  increibles cascadas que nos
                  rodean, no serán un secreto más
                  de nuestro país. Estamos
                  dispuestos a mostrarles estas
                  maravillas de Colombia, al mundo. </p>
                </div>



          </div>

         </div>
         <Hospedaje />
         <Actividades />
         <Galeria />
      </div>
    );
}

export default Home;
