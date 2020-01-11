import React from "react";
import "../css/main.css";
import emailjs from "emailjs-com";

const Contact = () => {
  return (
    <div className="contact" id="contact">
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
        <input type="hidden" name="contact_number" required />
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
