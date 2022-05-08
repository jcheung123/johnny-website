import React from 'react';
import { header } from '../../portfolio'
import './NavBar.css'

function NavBar(props) {
    const { homepage, title, linkOne, linkTwo, linkThree, linkFour } = header
    return (
        <nav className="nav">
            <div className="container">
                <h3>
                    {homepage ? (<a href={homepage} className='link'>{title}</a>) : (title)}
                </h3>
                <ul>
                    <li><a href="/">{linkOne}</a></li>
                    <li><a href="/">{linkTwo}</a></li>
                    <li><a href="/">{linkThree}</a></li>
                    <li><a href="/">{linkFour}</a></li>
                </ul>
            </div>
        </nav>    
    );
  }







export default NavBar