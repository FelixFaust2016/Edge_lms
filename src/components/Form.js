import React from "react";

const Form = () => {
  return (
    <form data-aos="fade-up" className="demo-form">
      <div>
        <input placeholder="Email" type="text" />
      </div>
      <div>
        <input placeholder="Subject" type="text" />
      </div>
      <div>
        <textarea rows="5" placeholder="Message" type="text" />
      </div>
      <aside className="form-btn">Request Quote</aside>
    </form>
  );
};

export default Form;
