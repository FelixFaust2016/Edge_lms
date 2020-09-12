import React from "react";

import EmailFOrm from "../components/EmailComp";

import s1 from "../img/s1.png";
import s2 from "../img/s2.png";
import s3 from "../img/s3.png";
import s4 from "../img/s4.png";
import s5 from "../img/s5.png";
import s6 from "../img/s6.png";
import s7 from "../img/s7.png";
import s8 from "../img/s8.png";
import g1 from "../img/g1.png";
import g2 from "../img/g2.png";
import g3 from "../img/g3.png";

import rect from "../img/rect.png";
import Learn from "../components/Learn";
import Footer from "../components/Footer";

const Features = () => {
  return (
    <>
      <div className="gs-banner">
        <div className="gs-banner-text">
          <h1>
            Transform your school
            <br /> using Edge LMS
          </h1>
          <p>
            Easily manage everything from class management,
            <br /> students management, course management, finance management
            etc.
          </p>
        </div>

        {/* Features sect */}
      </div>{" "}
      <div className="feat">
        <img className="g1" src={g1} />
        <img className="g2" src={g2} />
        <img className="g3" src={g3} />
        <div className="get-img" style={{ margin: "0px auto" }}>
          <img data-aos="fade-in" width="100%" src={rect} />
        </div>
        <div style={{ paddingBottom: "100px" }}>
          <EmailFOrm />
        </div>
        <h1 className="hd">All in one features</h1>
        <br />
        <div
          style={{
            width: "70%",
            margin: "0px auto",
            border: "none",
          }}
          className="why-text"
        >
          <div data-aos="fade-up" className="why-txt-cont">
            <span>
              <img src={s1} />
              <h4>Class management</h4>
            </span>
            <p>
              School administrators can easily create class structures depending
              on how many classes are currently within the school.
            </p>
          </div>
          <div data-aos="fade-down" className="why-txt-cont">
            <span>
              <img src={s2} />
              <h4>Instructor management</h4>
            </span>
            <p>
              School administrators can easily create class structures depending
              on how many classes are currently within the school.
            </p>
          </div>
          <div data-aos="fade-up" className="why-txt-cont">
            <span>
              <img src={s3} />
              <h4>School Management</h4>
            </span>
            <p>
              School administrators can manage student data and monitor academic
              performance.
            </p>
          </div>
          <div data-aos="fade-up" className="why-txt-cont">
            <span>
              <img src={s4} />
              <h4>Course management</h4>
            </span>
            <p>
              School administrators manage all course materials in our secure
              cloud storage and create a library students can access both online
              and offline.
            </p>
          </div>
          <div data-aos="fade-up" className="why-txt-cont">
            <span>
              <img src={s5} />
              <h4>Finance management</h4>
            </span>
            <p>
              School administrators can process all school fees, manage payment
              methods and access audit reports seamlessly.
            </p>
          </div>
          <div data-aos="fade-up" className="why-txt-cont">
            <span>
              <img src={s6} />
              <h4>Broadcast management</h4>
            </span>
            <p>
              School administrators can quickly disburse information to students
              and parents using the broadcast module.
            </p>
          </div>
          <div data-aos="fade-up" className="why-txt-cont">
            <span>
              <img src={s7} />
              <h4>Usage analytics</h4>
            </span>
            <p>
              Gain deep insights using our learning, behavioural and financial
              analytics modules and audit system.
            </p>
          </div>
          <div data-aos="fade-up" className="why-txt-cont">
            <span>
              <img src={s8} />
              <h4>Test-as-a-Service</h4>
            </span>
            <p>
              Our computer based testing service simplifies the assessment and
              scoring and correction process of students in your school.
            </p>
          </div>
          <div data-aos="fade-up" className="why-txt-cont ha"></div>
        </div>
      </div>
      {/* Freq sect */}
      <div className="freq">
        <div>
          <p className="sub-hd">have a question?</p>
          <h1 className="hd">Frequently Asked Questions</h1>
          <div
            style={{
              width: "70%",
              margin: "0px auto",
              border: "none",
            }}
            className="why-text"
          >
            <div data-aos="fade-up" className="why-txt-cont">
              <span>
                <h4>Is my data safe on the Edge LMS platform?</h4>
              </span>
              <p>
                Our software is engineered using top security certifications and
                licenses, and all your data is backed up regularly on our cloud
                servers.
              </p>
            </div>
            <div data-aos="fade-up" className="why-txt-cont">
              <span>
                <h4>How much does it cost?</h4>
              </span>
              <p>
                For schools, we charge an initial setup fee, after which our
                usage bill per user is on each payment made to the school.
                Please contact us for more information.
              </p>
            </div>
            <div data-aos="fade-up" className="why-txt-cont">
              <span>
                <h4>Can we create our own content?</h4>
              </span>
              <p>
                Yes, with our media and content development team, we can work
                with you in creating educational material tailored to your
                school.
              </p>
            </div>
            <div data-aos="fade-up" className="why-txt-cont">
              <span>
                <h4>How do we start?</h4>
              </span>
              <p>
                We will assign you an account manager who will guide you through
                the process. We transfer your data to our servers, and support
                your employees, and students through the transition process.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Learn section */}
      <Learn />
      {/* Footer section */}
      <Footer />
    </>
  );
};

export default Features;
