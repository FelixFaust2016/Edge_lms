import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Learn from "../components/Learn";

import g1 from "../img/g1.png";
import g2 from "../img/g2.png";
import g3 from "../img/g3.png";

const Resources = () => {
  return (
    <>
      <div className="gs-banner">
        <div className="gs-banner-text">
          <h1>Request a Demo</h1>
          <p>
            Edge LMS gives you the tools to supercharge your institution.
            <br />
            We are happy to provide a personalized demo and answer your
            questions.
          </p>
        </div>
      </div>

      {/*  */}
      <div className="start">
        <img className="g1" src={g1} />
        <img className="g2" src={g2} />
        <img className="g3" src={g3} />
        <Form />
      </div>
      {/*  */}
      <Learn />

      {/*  */}
      <Footer />
    </>
  );
};

export default Resources;
