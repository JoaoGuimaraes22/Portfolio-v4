import React from "react";
import "../css/main.css";
import emailjs from "emailjs-com";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-text">
        <div className="line-1"></div>
        <h1 className="contact-title">
          <span className="contact-num">05. </span>Let's talk
        </h1>
        <div className="line"></div>
      </div>
      <div className="contact-main">
        <div className="contact-subtitle">
          <p className="sub-text">
            If you want to do business, or just talk, go ahead and send me a
            message below, and I will reply as fast as possible.
          </p>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();

            // let template_params = {
            //   user_name: { userName },
            //   user_email: { userEmail },
            //   message: { userMessage }
            // };

            var service_id = "default_service";
            var template_id = "onformsubmit";
            const user_id = "user_UyJVSBUcz3FPK1w6dUBE8";

            emailjs
              .sendForm(service_id, template_id, e.target, user_id)
              .then((res) => {
                console.log("Sucess", res.status, res.text);
              })
              .catch((err) => {
                console.log("Failed", err);
              });
          }}
        >
          <input
            type="hidden"
            name="contact_number"
            className="what"
            required
          />
          <div className="form-name form-comp">
            <label className="label">Name: </label>
            <input
              type="text"
              name="user_name"
              className="contact-input name"
              required
            />
          </div>
          <div className="form-email form-comp">
            <label className="label">Email: </label>
            <input
              type="email"
              name="user_email"
              className="contact-input email"
              required
            />
          </div>
          <div className="form-message form-comp">
            <label className="label label-msg">Message: </label>
            <textarea
              name="message"
              className="contact-input textarea"
              required
            />
          </div>
          <input type="submit" value="Send Message" className="submit-button" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
