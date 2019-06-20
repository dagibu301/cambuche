import React from 'react';
import { Media } from 'reactstrap';


function Footer() {
    return(
      <div className="footer">


        <div className="row footer-row">
          <div className="col-11  offset-1 col-md-5 mt-5">
            <p>CONTACTO</p>
            <p>TEL: 301 672 7804 <br /> IG: ELCAMBUCHEDELMONO <br /> EMAIL: INFO@ELCAMBUCHEDELMONO.COM</p>
            <p>San Antonio-Jamundí, Colombia.</p>
          </div>
          <div className="col-12   col-md-6 d-none d-lg-block ">
            <img className="footer-img" src="/assets/images/montana.png" alt="montanta" />
          </div>





        </div>

      </div>
    );
}

export default Footer;
