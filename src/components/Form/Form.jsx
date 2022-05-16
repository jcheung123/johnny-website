import React from 'react';
import './Form.css'

function Form(props) {
    return (
        <form action="https://api.sheetmonkey.io/form/jKzdA6mjppwyKvUrgY9TkE" method="POST">
            <label className='form-class'>
    
                <input id="name" type="text" name="name" placeholder="Name" required/>

                <input id="email" type="email" name="email" placeholder="Email" required/>
                <br /><br />

                <textarea id="textarea" name="message" placeholder="Send me a message" rows="4" cols="50" required></textarea>
            </label>
            <br /><br />
            <button type="submit" className='link'>Submit {'>'}</button>
        </form>
    );
  }


export default Form;