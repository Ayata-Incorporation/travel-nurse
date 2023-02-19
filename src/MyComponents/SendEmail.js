import React, { useState } from "react";
import axios from "axios";
import "./style.css";

export default function SendEmail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailMessage = {
      to: "your-gmail-address@gmail.com",
      from: email,
      subject: `New message from ${name}`,
      text: message,
    };

    const response = await axios.post("https://api.sendgrid.com/v3/mail/send", {
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      data: emailMessage,
    });

    console.log(response.data);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="bordertitle">
        <hr />
        <h1>CONTACT US & ABOUT US</h1>
        <hr />
      </div>
      <section className="contactus">
        <form onSubmit={handleSubmit}>
          <div className="sendemail">
            <h1>Contact us</h1>
            <h3>Name:</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name ..."
            />
            <h3> Email:</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter you email ..."
            />
            <h3>Message:</h3>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter the message you want to send .."
            ></textarea>
            <br />
            <button type="submit">Send Message</button>
          </div>
        </form>
        <div className="aboutus">
          <div className="Title">
            <span>
              <h3>TRAVELL NURSE</h3>
            </span>
          </div>
          <div className="travellnurse">
            <h4>
              A travel nurse website is a platform designed to help travel
              nurses find employment opportunities across the country. These
              websites typically allow nurses to search for jobs by location,
              specialty, and other criteria, and to apply for positions directly
              through the site.
            </h4>
            <p>
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
