import React from 'react';
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>
    <img className="project__img" src={project.img} alt="projectimg" />
    <p className='project__description'>{project.description}</p>
    
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a href={project.sourceCode} className='link'>View on GitHub {'>'}</a>
    )}

    {project.livePreview && (
      <a href={project.livePreview} className='link'>Preview Demo {'>'}</a>
    )}
  </div>
)

export default ProjectContainer
