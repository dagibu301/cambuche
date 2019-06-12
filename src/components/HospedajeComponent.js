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
        <div className="row mt-5 justify-content-around">

          <div className="col-sm-12  col-md-6 col-xl-4 mt-4">
            <Media object src='/assets/images/cozy-cambuche.png' alt='cozy cambuche' />
          </div>

          <div className="col-sm-12 col-md-6 col-xl-4 mt-4 ">
            <Media object src='/assets/images/chill-cambuche.png' alt='chill cambuche' />
          </div>

          <div className="col-sm-12 col-md-6  col-xl-4 mt-4 ">
            <Media object src='/assets/images/camping.png' alt='camping' />
          </div>



          <div className="col-12 col-md-6 col-sm-12 col-xl-4 mt-4 ">
            <Media object src='/assets/images/cozy-room.png' alt='cozy room' />
          </div>

          <div className="col-12 col-md-6 col-sm-12 col-xl-4 mt-4 ">
            <Media object src='/assets/images/chill-room.png' alt='chill room' />
          </div>

          <div className="col-12  col-md-6 col-sm-12 col-xl-4 mt-4">
            <Media object src='/assets/images/shared room.png' alt='shared room' />
          </div>


        </div>
      </div>


    );
}

export default Hospedaje;
