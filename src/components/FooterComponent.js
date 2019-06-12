import React from 'react';
import { Media } from 'reactstrap';


function Footer() {
    return(
      <div className="footer">


        <div className="row footer-row">
          <div className="col-12  offset-lg-1 col-lg-5 mt-5">
            <p>CONTACTO</p>
            <p>TEL: 301 672 7804 <br /> IG: ELCAMBUCHEDELMONO <br /> EMAIL: INFO@ELCAMBUCHEDELMONO.COM</p>
            <p>San Antonio-Jamundí, Colombia.</p>
          </div>
          <div className="col-12   col-lg-6 ">
            <img className="footer-img" src="/assets/images/montana.png" alt="montanta" />
          </div>





        </div>

      </div>
    );
}

export default Footer;
