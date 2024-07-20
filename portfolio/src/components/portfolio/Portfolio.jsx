import React from "react";
import "./portfolio.css";
import Image1 from "../../assets/chat.jpg";
import Image2 from "../../assets/store.png";
import Image3 from "../../assets/weathrt.png";
import Image4 from "../../assets/todolist.png";
import Image5 from "../../assets/Image5.png";
import Image6 from "../../assets/Image6.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Rozany Chat",
    github: "https://github.com/JimyRozany/rozany-chat",
    demo: "https://rozany-chat.netlify.app",
  },
  {
    id: 2,
    image: Image2,
    title: "Echo Store",
    github: "https://github.com/JimyRozany/eco-store",
    demo: "https://my-eco-store.netlify.app/",
  },
  {
    id: 3,
    image: Image3,
    title: "Weather",
    github: "https://github.com/JimyRozany/weather",
    demo: "https://palestine-weather-app.netlify.app/",
  },
  {
    id: 4,
    image: Image4,
    title: "Todo List",
    github: "https://github.com/JimyRozany/todo_list",
    demo: "https://my-app-todolist.netlify.app/",
  },
  {
    id: 5,
    image: Image5,
    title: "Courses (API)",
    github: "https://github.com/JimyRozany/courses_api",
    demo: "#",
  },
  {
    id: 6,
    image: Image6,
    title: "Ecommerce web App",
    github: "https://github.com/JimyRozany/ecommerce",
    demo: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
