import React, { useEffect, useState, useRef } from "react";
import { about, contact } from '../../portfolio'
import useTypewriter from "react-typewriter-hook"
import './About.css'

let index = 0;

function About(props) {
    const { name, role, description, description2, social } = about
    const {email} = contact
    
    const [currentRole, setCurrentRole] = useState('Full Stack Developer');
    const intervalId = useRef({});
    const typeWriterRole = useTypewriter(currentRole);

    useEffect(() => {
      intervalId.current = setInterval(() => {
          index = index > 2 ? 0 : ++index;
          setCurrentRole(role[index]);
      }, 4000)
      
      return () => clearInterval(intervalId.current);
    }, [role])

    return (
      <div className='about center'>
        {name && (
          <h1>
            Hello, I am <br />
            <span className='about__name'>{name}.</span>
          </h1>
        )}
  
        {role && <h2 className='cursor about__role'>A {typeWriterRole}.</h2>}
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