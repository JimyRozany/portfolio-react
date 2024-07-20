import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design a web templates</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Build the web pages</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Build apps (React & Nextjs)</p>
            </li>
          </ul>
        </article>
        {/* end frontend reactJs */}
        <article className="service">
          <div className="service__head">
            <h3>Backend</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Build full app by laravel.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Build APIs.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integration with payment gateway.</p>
            </li>
          </ul>
        </article>
        {/* end Backend (laravel) */}
      </div>
    </section>
  );
};

export default Services;
