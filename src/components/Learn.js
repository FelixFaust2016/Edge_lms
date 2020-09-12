import React from "react";

import WhiteButton from "../components/WhiteButton";

import l1 from "../img/l1.png";
import l2 from "../img/l2.png";
import l3 from "../img/l3.png";
import l4 from "../img/l4.png";

const Learn = () => {
  return (
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
  );
};

export default Learn;
