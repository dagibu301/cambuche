import React from 'react';
import { Media } from 'reactstrap';

function Home() {
    return(
      <div>
         <div id="main-bg">
         </div>

         <div className="row">
          <div className="col-12 offset-md-1  col-md-6">
            <Media object src='/assets/images/somos.png' alt='somos' />
          </div>

          <div className="col-12 col-md-4 ml-5 mont">
              <div className="ml-5">
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
      </div>
    );
}

export default Home;
