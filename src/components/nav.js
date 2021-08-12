import React from 'react';
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import { Link} from 'react-scroll'
import './home.css';


const Nav =() =>{
    
    
    return (


        <header >
            <h1 className = 'name-top'>Gerardo Torres</h1>

            <div className = 'icon-links'>
                <a href = 'https://www.linkedin.com/in/gt24/' target='_blank' rel='noopener noreferrer' title = 'LinkedIn'><FaLinkedin id = 'linked-in'/></a>
                <a href = 'https://github.com/gtor23' target='_blank' rel='noopener noreferrer' title = 'GitHub'><FaGithub id = 'git-hub'/></a>
                <a href = 'mailto:gerardo.tor23@gmail.com'><SiGmail id = 'e-mail' title = 'GMail'/></a>
                
                 
            </div>
            
            <nav className = 'sticky-nav'>
                <Link to='one' smooth = {true} duration = {325} className = 'pointer'> Home </Link>

                <Link to='theabt' smooth = {true} duration = {325} className = 'pointer'> About </Link> 

                <Link to='projects' smooth = {true} duration = {325} className = 'pointer'> Projects </Link>
            </nav>
        </header>

    )

}

export default Nav