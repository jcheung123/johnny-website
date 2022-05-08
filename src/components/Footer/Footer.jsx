import React from 'react';
import './Footer.css'


function Footer(props) {
    return (
        <footer>
            <p class="icons">
                <button><i class="fas fa-envelope"></i></button>
                <button><i class="fab fa-github"></i> </button>
                <button><i class="fab fa-instagram"></i></button>
                <button><i class="fab fa-linkedin"></i></button>
            </p>
            <div class="copyright">
                <span> &copy; 2022 johnnnycheung</span>
            </div>
        </footer>
        
    );
  }






export default Footer