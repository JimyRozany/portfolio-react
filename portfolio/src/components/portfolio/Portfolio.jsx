import React from 'react'
import './portfolio.css'
import Image1 from '../../assets/Image1.png'
import Image2 from '../../assets/Image2.png'
import Image3 from '../../assets/Image3.png'
import Image4 from '../../assets/Image4.png'
import Image5 from '../../assets/Image5.png'
import Image6 from '../../assets/Image6.png'

const data = [
  {
      id:1,
      image:Image1,
      title:"Orion UI kit - Charts templates & infographics in Figma",
      github:"https://github.com",
      demo:"https://dribbble.com/shots/19103678-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
      id:2,
      image:Image2,
      title:"Eclipse - Figma dashboard UI kit for data design web apps",
      github:"https://github.com",
      demo:"https://dribbble.com/shots/19103793-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
      id:3,
      image:Image3,
      title:"Orion UI kit - Charts templates & infographics in Figma",
      github:"https://github.com",
      demo:"https://dribbble.com/shots/19103686-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
      id:4,
      image:Image4,
      title:"Eclipse - Figma dashboard UI kit for data design web apps",
      github:"https://github.com",
      demo:"https://dribbble.com/shots/19103837-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
      id:5,
      image:Image5,
      title:"Orion UI kit - Charts templates & infographics in Figma",
      github:"https://github.com",
      demo:"https://dribbble.com/shots/19103695-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
      id:6,
      image:Image6,
      title:"Eclipse - Figma dashboard UI kit for data design web apps",
      github:"https://github.com",
      demo:"https://dribbble.com/shots/19103845-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
];



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">Github</a>
                <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
            </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio