import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'

import {Pagination} from 'swiper'; 
/* https://swiperjs.com 
  Swiper is the most modern free mobile touch slider
 with hardware accelerated transitions and 
 amazing native behavior.
 It is intended to be used in mobile */

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: avatar1,
    name: "Ernest Achiever",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Maiores, vitae ut excepturi debitis quam voluptates porro omnis odit,
    vero ullam doloremque a laborum distinctio necessitatibus.`,
  },
  {
    avatar: avatar2,
    name: "Jack Oliver",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Maiores, vitae ut excepturi debitis quam voluptates porro omnis odit,
    vero ullam doloremque a laborum distinctio necessitatibus.`,
  },
  {
    avatar: avatar3,
    name: "Amelia Harry",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Maiores, vitae ut excepturi debitis quam voluptates porro omnis odit,
    vero ullam doloremque a laborum distinctio necessitatibus.`,
  },
];


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
      >
        {
          data.map(({avatar ,name ,review},index)=>{
            return(
              <SwiperSlide key={index}className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials