import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Emailjs = () => {
  const notify = () => toast("Message sent successfully");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_va4r5c4";
    const templateId = "template_kjfxq37";
    const publicKey = "tPtsaunv1vNqTftWP";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      to_name: "Stallion Immigration",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <>
      <div className="appoint">Get In Touch</div>
      <div className="appoint1">Get In Touch</div>
      <form className="registration-form" action="#" onSubmit={handleSubmit}>
        <div className="input-box">
          <label>Full Name</label>
          <input
            required
            placeholder="Enter full name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-box">
          <label>Email</label>
          <input
            required
            placeholder="Enter email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-box">
          <label>Phone Number</label>
          <input
            required
            placeholder="Enter phone number"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="input-box address-box">
          <label>Message</label>
          <input
            required
            placeholder="Enter your message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button onClick={notify}>Submit</button>
      </form>
    </>
  );
};

export default Emailjs;
