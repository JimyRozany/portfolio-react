import React from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline />
            <h4>Email</h4>
            <h5>rozny@yahoo.com</h5>
            <a href="mailto:rozny@yahoo.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Jimy Rozany</h5>
            <a href="https://m.me/jimy.rozany.3" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp - Telegram</h4>
            <h5>+20 11 537 915 75</h5>
            <a href="https://telegram.me/jrozany" target="_blank">
              T - Send a message
            </a>
            <span style={{ marginRight: "10px" }}></span>
            <a
              href="https://api.whatsapp.com/send?phone=+201153791575"
              target="_blank"
            >
              W - Send a message
            </a>
          </article>
        </div>
        {/* End Contact Options */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message ..."
            required
          ></textarea>
          <button type="submit" className=" btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
