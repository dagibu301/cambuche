import React from 'react';
import { Media } from 'reactstrap';

function Hospedaje() {
    return(
      <div>
        <div className="row mt-5">

          <div className="offset-md-1 mr-2 col-md-2 " id="bg-2-lines" >
          </div>

          <div className="col-md-4 mr-lg-5 ml-lg-5 d-flex justify-content-center">
            <h2 className="yellow-tittle">HOSPEDAJE</h2>
          </div>

          <div className="col-md-2 ml-2 d-block d-sm-none"  id="bg-2-lines">
          </div>





          <div className="col-md-2 ml-5 d-none d-xl-block"  id="bg-2-lines">
          </div>

        </div>
        <div className="row mt-5">

          <div className="col-sm-12  col-lg-5 col-xl-3 mr-xl-5 mt-4">
            <img className="img-hos" src="/assets/images/cozy-cambuche.png" alt="cozy cambuche" />

          </div>

          <div className="col-sm-12 col-lg-5 col-xl-3 mr-xl-5 mt-4 ">
            <Media  className="img-hos" object src='/assets/images/chill-cambuche.png' alt='chill cambuche' />
          </div>

          <div className="col-sm-12 col-lg-5  col-xl-3 mt-4 ">
            <Media className="img-hos"  object src='/assets/images/camping.png' alt='camping' />
          </div>



          <div className="col-12 col-lg-5 col-sm-12 col-xl-3 mr-xl-5 mt-4 ">
            <Media  className="img-hos" object src='/assets/images/cozy-room.png' alt='cozy room' />
          </div>

          <div className="col-12 col-lg-5 col-sm-12 col-xl-3 mr-xl-5 mt-4 ">
            <Media className="img-hos" object src='/assets/images/chill-room.png' alt='chill room' />
          </div>

          <div className="col-12  col-lg-5 col-sm-12 col-xl-3 mt-4">
            <Media className="img-hos" object src='/assets/images/shared room.png' alt='shared room' />
          </div>


        </div>
      </div>


    );
}

export default Hospedaje;
