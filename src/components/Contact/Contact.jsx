import React from 'react';
import Form from '../Form/Form'
import { contact } from '../../portfolio'
import './Contact.css'


function Contact(props) {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Let's Get in Touch</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
        {/* // placeholder here for spacing */}
        </span>
      </a>
      <Form />
    </section>

  )
}

export default Contact