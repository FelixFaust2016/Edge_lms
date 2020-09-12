import React from "react";
import Footer from "../components/Footer";
import Learn from "../components/Learn";

import New from "../components/NewBtn";

import g1 from "../img/g1.png";
import g2 from "../img/g2.png";
import g3 from "../img/g3.png";
import r1 from "../img/r1.png";
import r2 from "../img/r2.png";
import r3 from "../img/r3.png";
import table from "../img/table.png";

const GetStarted = () => {
  return (
    <>
      <div className="gs-banner">
        <div className="gs-banner-text">
          <h1>Getting Started</h1>
          <p>
            It’s always the right time to do the right thing.
            <br /> We’ve made switching to Edge LMS very easy.
          </p>
        </div>

        {/*  */}
      </div>{" "}
      <div className="start">
        <img className="g1" src={g1} />
        <img className="g2" src={g2} />
        <img className="g3" src={g3} />
        <h1 className="hd">How do we start?</h1>
        <p style={{ textTransform: "unset" }} className="sub-hd">
          For the best experience, we have simplified the
          <br /> transition process into 3 easy steps:
        </p>
        <div className="start-text">
          <div
            data-aos="fade-up"
            style={{ textAlign: "center" }}
            className="why-txt-cont"
          >
            <img style={{ margin: "20px auto" }} src={r1} />
            <h4>Evaluate the Demo</h4>
            <p>
              When you are done exploring our services after a successful demo{" "}
            </p>
          </div>
          <div
            data-aos="fade-up"
            style={{ textAlign: "center" }}
            className="why-txt-cont"
          >
            <img style={{ margin: "20px auto" }} src={r2} />
            <h4>School Onboarding</h4>
            <p>
              We import your data for you, and train your school staff
              in-person.{" "}
            </p>
          </div>
          <div
            data-aos="fade-up"
            style={{ textAlign: "center" }}
            className="why-txt-cont"
          >
            <img style={{ margin: "20px auto" }} src={r3} />
            <h4>Software Launch</h4>
            <p>
              Your Learning Management System is now Live and ready to use!{" "}
            </p>
          </div>
        </div>
        <div className="works" style={{ paddingBottom: "100px" }}>
          <div className="works-cont">
            <div className="works-text">
              <img data-aos="fade-up" src={table} />
              <div style={{ width: "300px" }} data-aos="fade-down">
                <h2>24/7 Support</h2>
                <p style={{ fontSize: "0.75rem" }}>
                  We will assign you an account manager who will guide you
                  through the process. We transfer your data to our servers, and
                  support your employees, and students through the transition
                  process.
                </p>
                <New link={"Request a Demo >>"} />
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      {/*  */}
      <Learn />
      {/*  */}
      <Footer />
    </>
  );
};

export default GetStarted;
