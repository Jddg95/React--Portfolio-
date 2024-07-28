import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contactform.css"; // Import the CSS file

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zgv0tgh",
        "template_svajhyn",
        form.current,
        "21gFeyAhT-o-ljaBu"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setName(""); // Clear the name input
          setEmail(""); // Clear the email input
          setMessage(""); // Clear the message input
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label"></label>
          <input
            type="text"
            name="user_name"
            className="form-control"
            id="exampleInputName"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"></label>
          <input
            type="email"
            name="user_email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div id="emailHelp" className="form-text">
            We&apos;ll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            name="message"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
