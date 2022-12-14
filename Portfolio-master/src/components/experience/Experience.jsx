import React from 'react';
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
        <h3>Worked On</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='content_icon'/>
              <div>
                <h4>Flutter</h4>
              </div>
            </article>
            
            <article className='experience_details'>
              <BsPatchCheckFill className='content_icon'/>
              <div>
                <h4>User Interface Design</h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='content_icon'/>
              <div>
                <h4>Dart</h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='content_icon'/>
              <div>
                <h4>Android Development</h4>
              </div>
            </article>
            
            <article className='experience_details'>
              <BsPatchCheckFill className='content_icon'/>
              <div>
                <h4>Java</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='content_icon'/>
              <div>
                <h4>Python</h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='content_icon'/>
              <div>
                <h4>Amazon Web Services </h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='content_icon'/>
              <div>
                <h4>REST APIs </h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='content_icon'/>
              <div>
                <h4>C++ </h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='content_icon'/>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='content_icon'/>
              <div>
                <h4>React Native</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience