import React from "react";

import snow from "../img/snow.png";
import fl from "../img/fl1.png";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import face from "../img/facebook.png";
import ball from "../img/ball.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <img className="snow" src={snow} />
        <img className="fl" src={fl} />
        <div className="foot-text">
          <div className="foot-list">
            <h5>Product</h5>
            <div>Features</div>
            <div>Get Started</div>
            <div>Request Demo</div>
          </div>
          <div className="foot-list">
            <h5>Resources</h5>
            <div>Help Center</div>
            <div>Term of Use</div>
            <div>Privacy Policy</div>
          </div>
          <div className="foot-list">
            <h5>Contact</h5>
            <div>sales@edgelms.rg</div>
            <div>(+234) 705 555 5755</div>
            <div>46 Aswan Street, Wuse Zone 3, Abuja.</div>
          </div>
        </div>
      </footer>
      <div className="last-foot">
        <p>© 2020. All rights reserved.</p>
        <span>
          <img src={face} />
          <img src={twitter} />
          <img src={ball} />
        </span>
      </div>
    </div>
  );
};

export default Footer;
