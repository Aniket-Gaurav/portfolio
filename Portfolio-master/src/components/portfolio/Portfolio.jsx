import React from 'react';
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const data=[
  {
    id:1,
    image: IMG1,
    title:'Health-Tracker-Application-master',
    github:'https://github.com/mfarman238/Health-Tracker-Application',
  },
  {
    id:2,
    image: IMG2,
    title:'WeatherApplication ',
    github:'https://github.com/mfarman238/WeatherApplication',
  },
  {
    id:4,
    image: IMG4,
    title:'Note-taking-application',
    github:'https://github.com/mfarman238/Note-taking-application',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portfolio_content'>
              <div className='portfolio_image'>
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className='portfolio_cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
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