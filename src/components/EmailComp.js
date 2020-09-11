import React from "react";

const Email = () => {
  return (
    <form className="email-form">
      <input
        type="text"
        placeholder="Email Address"
        className="email-form-input"
      />
      <div className="btn email-btn">download brochure</div>
    </form>
  );
};

export default Email;
