import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>FrontEnd (ReactJS)</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/* end frontend reactJs */}
        <article className="service">
          <div className="service__head">
            <h3>Backend (laravel)</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/* end Backend (laravel) */}
        <article className="service">
          <div className="service__head">
            <h3>Backend (Dotnet)</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/* end Backend (Dotnet)*/}
      </div>
    </section>
  )
}

export default Services