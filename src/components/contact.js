import React, { useState, useEffect } from "react";
import "../css/main.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [animate, setAnimate] = useState({ visibility: "hidden" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const myScrollFunc = () => {
    window.addEventListener("scroll", () => {
      let y = window.scrollY;
      if (y >= 4600) {
        setAnimate({
          visibility: "visible",
          animation: "appear 1s",
          animationFillMode: "forwards"
        });
      }
    });
  };

  useEffect(() => {
    myScrollFunc();
  }, []);

  return (
    <div className="contact" id="contact" style={animate}>
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

            var template_params = {
              user_name: name,
              user_email: email,
              user_message: message
            };

            const user_id = "user_UyJVSBUcz3FPK1w6dUBE8";
            const service_id = "default_service";
            const template_id = "template_QZsjJVZa";
            emailjs
              .send(service_id, template_id, template_params, user_id)
              .then(alert("Your message was sent!"))
              .catch((err) => {
                console.log("Error: ", err);
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
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              required
            />
          </div>
          <div className="form-email form-comp">
            <label className="label">Email: </label>
            <input
              type="email"
              name="user_email"
              className="contact-input email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              required
            />
          </div>
          <div className="form-message form-comp">
            <label className="label label-msg">Message: </label>
            <textarea
              name="message"
              className="contact-input textarea"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
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
