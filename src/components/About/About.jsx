import React from 'react';
import { about, contact } from '../../portfolio'
import './About.css'


function About(props) {
    const { name, role, description, description2, social } = about
    const {email} = contact

    return (
      <div className='about center'>
        {name && (
          <h1>
            Hello, I am <br />
            <span className='about__name'>{name}.</span>
          </h1>
        )}
  
        {role && <h2 className='about__role'>A {role}.</h2>}
        <br />
        <img className='about__img' src="AboutMeImgs/JohnnyImg.jpeg" alt="johnnyimg" />

        <p className='about__desc'>{description && description}</p>
        <p className='about__desc'>{description2 && description2}</p>
  
        <div className='about__contact center'>
          {email && (
            <a href={`mailto:${contact.email}`} className='link'><i class="fas fa-envelope"></i></a>
          )}
  
          {social && (
            <>
              {social.github && (
                <a href={social.github} className='link'><i class="devicon-github-original colored"></i></a>
              )}
  
              {social.linkedin && (
                <a href={social.linkedin} className='link'><i class="devicon-linkedin-plain colored"></i></a>
              )}
            </>
          )}
        </div>
      </div>
    )
  }

export default About