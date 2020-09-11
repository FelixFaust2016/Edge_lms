import React, { useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Aos from "aos";

import "aos/dist/aos.css";

import EmailForm from "../components/EmailComp";
import New from "../components/NewBtn";
import WhiteButton from "../components/WhiteButton";
import Footer from "../components/Footer";

import "animate.css/animate.min.css";

import img from "../img/banner-img.png";
import why1 from "../img/why1.png";
import why2 from "../img/why2.png";
import why3 from "../img/why3.png";
import dots from "../img/dots.png";
import triangle from "../img/traingle.png";
import w1 from "../img/w1.png";
import w2 from "../img/w2.png";
import w3 from "../img/w3.png";
import h1 from "../img/h1.png";
import h2 from "../img/h2.png";
import h3 from "../img/h3.png";
import b1 from "../img/b1.png";
import b2 from "../img/b2.png";
import b3 from "../img/b3.png";
import b4 from "../img/b4.png";
import b5 from "../img/b5.png";
import oval from "../img/oval.png";
import d1 from "../img/f1.png";
import l1 from "../img/l1.png";
import l2 from "../img/l2.png";
import l3 from "../img/l3.png";
import l4 from "../img/l4.png";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="home-cont">
      {/* Banner sectiom */}
      <div className="banner">
        <div className="banner-text">
          <h1>Cloud assistant for schools</h1>
          <p>
            Edge LMS provides everything you need to plan, organize, manage, &
            <br />
            finance your school, in one place.
          </p>
          <EmailForm />
        </div>
        <div style={{ width: "70%", margin: "0px auto" }}>
          <img src={img} />
        </div>
      </div>

      {/* WHy section */}
      <div className="why-cont">
        <img className="dots" src={dots} />
        <div className="why-section-cont">
          <p className="sub-hd">why choose edge</p>
          <h1 className="hd">
            Our aim is to solve the 3 fundamental
            <br /> drawbacks in Education
          </h1>
          <div className="why-text">
            <div data-aos="fade-up" className="why-txt-cont">
              <span>
                <img src={why1} />
                <h4>Training</h4>
              </span>
              <p>
                Seamless training delivery. Edge LMS has simplified teaching for
                Instructors by provding tools that help in distributiing course
                materials while also monitoring students performance.
              </p>
            </div>
            <div data-aos="fade-down" className="why-txt-cont">
              <span>
                <img src={why2} />
                <h4>Learning</h4>
              </span>
              <p>
                Adaptive learning technology. Students can study better with
                interactive video sessions, online discussion boards, and their
                personalized learning schedule on Edge LMS.
              </p>
            </div>
            <div data-aos="fade-up" className="why-txt-cont">
              <span>
                <img src={why3} />
                <h4>Computer Testing</h4>
              </span>
              <p>
                Testing as a Service. Our robust Computer Based Testing service
                will ensure that Students can practice with various past
                exammination questions.
              </p>
            </div>
          </div>
        </div>
        <img className="triangle" src={triangle} />
      </div>

      {/* work section */}
      <div className="works">
        <div className="works-cont">
          <h1 className="hd">How Edge LMS works?</h1>
          <p style={{ textTransform: "unset" }} className="sub-hd">
            The unique thing about Edge LMS is its self-provisioning, unfettered
            interactivity and
            <br /> communication when delivering its services.
          </p>
          <div className="works-text">
            <img data-aos="fade-up" src={w1} />
            <div data-aos="fade-down">
              <h2>For Learner</h2>

              <div className="dd">
                <i class="fas fa-chevron-right"></i>
                <span>Access course materials both online and offline</span>
              </div>
              <div className="dd">
                <i class="fas fa-chevron-right"></i>
                <span>Personalize their learning schedule and curriculum</span>
              </div>
              <div className="dd">
                <i class="fas fa-chevron-right"></i>
                <span>Collaborate with other students on the platform</span>
              </div>
              <div className="dd">
                <i class="fas fa-chevron-right"></i>
                <span>
                  Measure their course competency via computer based
                  <br /> {"    "} {"    "}tests and exams
                </span>
              </div>
              <New />
            </div>
          </div>
        </div>
      </div>

      <div className="works">
        <div className="works-cont">
          <div className="works-text">
            <div data-aos="fade-up">
              <h2>For Instructors</h2>

              <div className="dd">
                <i class="fas fa-chevron-right"></i>
                <span>
                  Create course structures and manage course content for
                  <br />
                  students
                </span>
              </div>
              <div className="dd">
                <i class="fas fa-chevron-right"></i>
                <span>Schedule Live classes in student’s calendar</span>
              </div>
              <div className="dd">
                <i class="fas fa-chevron-right"></i>
                <span>
                  Interact with students and send notifications of due
                  <br />
                  assignments online
                </span>
              </div>
              <div className="dd">
                <i class="fas fa-chevron-right"></i>
                <span>
                  Monitor students performance on computer based tests
                </span>
              </div>
              <New />
            </div>
            <img data-aos="fade-down" src={w2} />
          </div>{" "}
        </div>
      </div>

      <div className="works" style={{ paddingBottom: "100px" }}>
        <div className="works-cont">
          <div className="works-text">
            <img data-aos="fade-up" src={w3} />
            <div data-aos="fade-down">
              <h2>For Schools</h2>

              <div className="dd">
                <i class="fas fa-chevron-right"></i>
                <span>
                  Create course structures and manage course content for
                  <br />
                  students
                </span>
              </div>
              <div className="dd">
                <i class="fas fa-chevron-right"></i>
                <span>Schedule Live classes in student’s calendar</span>
              </div>
              <div className="dd">
                <i class="fas fa-chevron-right"></i>
                <span>
                  Interact with students and send notifications of due
                  <br />
                  assignments online
                </span>
              </div>
              <div className="dd">
                <i class="fas fa-chevron-right"></i>
                <span>
                  Monitor students performance on computer based tests
                </span>
              </div>
              <New />
            </div>
          </div>{" "}
        </div>
      </div>

      {/* Good hand section */}
      <div className="hands">
        <img className="oval" src={oval} />
        <img className="dot" src={dots} />
        <img className="line" src={d1} />
        <div>
          <h1 className="hd">You’re in a good hands</h1>
          <p style={{ textTransform: "unset" }} className="sub-hd">
            ST&T Regency International Schools uses Edge LMS to deliver an
            <br /> efficient blended learning environment.
          </p>
          <div className="hands-cont">
            <div data-aos="fade-up" className="hands-text">
              <p>
                Life before Company was very chaotic — we got a lot of phone
                calls, a lot of mistyped orders. So with Company, the ability to
                see the order directly from the customer makes it so
                streamlined.
              </p>
              <span className="hand-foot">
                <img src={h1} />
                <h5>Full Name, School Name</h5>
              </span>
            </div>
            <div data-aos="fade-down" className="hands-text">
              <p>
                There’s no way we could have hired these many people and gotten
                so much business had we not had all of those back-office systems
                figured out. It’s been easier growing our company with a system
                that is so easy and scalable.
              </p>
              <span className="hand-foot">
                <img src={h2} />
                <h5>Full Name, School Name</h5>
              </span>
            </div>
            <div data-aos="fade-up" className="hands-text">
              <p>
                Wow. I just updated my site and it was SO SIMPLE. I am blown
                away. You guys truly kick ass. Thanks for being so awesome. High
                fives!
              </p>
              <span className="hand-foot">
                <img src={h3} />
                <h5>Full Name, School Name</h5>
              </span>
            </div>
          </div>{" "}
          <div className="hnd-logo">
            <img src={b1} />
            <img src={b2} />
            <img src={b3} />
            <img src={b4} />
            <img src={b5} />
          </div>
        </div>
      </div>

      {/* learn section */}
      <div className="learn">
        <img className="l1" src={l1} />
        <img className="l2" src={l2} />
        <img className="l3" src={l3} />
        <img className="l4" src={l4} />
        <div>
          <h1 className="hd">Want to learn more?</h1>
          <br />
          <p
            style={{
              color: "white",
              textTransform: "unset",
              lineHeight: "25px",
            }}
            className="sub-hd"
          >
            Edge LMS gives you the tools to supercharge your institution.
            <br /> We are happy to provide a personalized demo and answer your
            questions.
          </p>
          <br />
          <div style={{ margin: "0px auto" }}>
            <WhiteButton />
          </div>
        </div>
      </div>

      {/* footer section */}
      <Footer />
    </div>
  );
};

export default Home;
