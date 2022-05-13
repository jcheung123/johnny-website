import React from 'react';
import { header } from '../../portfolio'
import './NavBar.css'
import { Link as Scroll } from 'react-scroll';

function NavBar(props) {
    const { homepage, title, linkAbout, linkProjects, linkSkills, linkContact } = header
    
    return (
        <nav className="nav">
            <div className="container">
                <h3>
                    {homepage ? (<a href={homepage} className='link'>{title}</a>) : (title)}
                </h3>
                <ul>
                    <li>
                        <Scroll to="about" activeClass="active" spy={true}>{linkAbout}</Scroll>
                    </li>
                    <li>
                        <Scroll to="projects" activeClass="active" spy={true}>{linkProjects}</Scroll>
                    </li>
                    <li>
                        <Scroll to="skills" activeClass="active" spy={true}>{linkSkills}</Scroll>
                    </li>
                    <li>
                        <Scroll to="contact" activeClass="active" spy={true}>{linkContact}</Scroll>
                    </li>
                </ul>
            </div>
        </nav>    
    );
  }







export default NavBar