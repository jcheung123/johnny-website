import React from 'react';
import './Footer.css'


function Footer(props) {
    return (
        <footer>
            <p class="icons">
                <a href="mailto:cheungjc@outlook.com"><button><i class="fas fa-envelope"></i></button></a>
                <a href="https://github.com/jcheung123/"><button><i class="fab fa-github"></i> </button></a>
                <a href="https://www.linkedin.com/in/cheung-johnny/"><button><i class="fab fa-linkedin"></i></button></a>
                <a href="https://www.instagram.com/torontofoodstop/"><button><i class="fab fa-instagram"></i></button></a>
            </p>
            <div class="copyright">
                <span> made with react and lots of googling</span>
            </div>
            <div class="copyright">
                <span> &copy; 2022 johnnnycheung</span>
            </div>
        </footer>
        
    );
  }






export default Footer