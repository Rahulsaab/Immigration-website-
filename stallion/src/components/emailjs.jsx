import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Emailjs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      to_name: "Stallion Immigration",
      message: message,
    };

    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast.success("Email sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
    } catch (error) {
      toast.error("Error sending email. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
          />
        </div>
        <button type="submit" disabled={isLoading}> 
          {isLoading ? "Sending..." : "Submit"} 
        </button>
      </form>
    </>
  );
};

export default Emailjs;
