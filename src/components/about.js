import React, { Component } from 'react';

import './about.css';


// const Head =() =>{
//     <head>
//         <title>About</title>
//         <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
//     </head>
// }



const About =() =>{
    
    // componentDidMount() {
    //     document.title = 'About'
    // }

    return (

        // <Head />


        // <div className = 'theabt'>
                <main className="myabt" id = 'theabt'>
    
                    <h1 className="abt"> ABOUT <span id = 'me'> ME</span></h1>
            
                    <div className="abtpar"> 
                        <p>
                        {/* and applying my engineering and problem solving skills to solve problems */}
                            My name is Gerardo Torres, better known as Jerry, and I am a recent Software Engineering graduate from Fullstack Academy.
                            I graduated from the University of Illinois at Chicago with a Bachelor's of
                            Science in Mechanical Engineering in Spring 2018, and after 2.5 years of working as an engineer in the manufacturing industry,
                            I decided to pursue a career in Software Engineering. My interest in this career path grew as I took it upon myself to revisit
                            programming in hopes of being able to develop better solutions in my daily work tasks. <br/><br/>

                            After completing a basic programming course in Python, I began to find ways to implement the skills I learned to automate my work tasks and as a result I was able to achieve my goals. 
                            My interest in this field kept growing as I kept learning more unitl I decided to attend UIC's Tech Coding Bootcamp, partnered with Fullstack Academy, to finally begin my Software 
                            Engineer career switch journey. At Fullstack Academy, I learned many Web Development concepts and built various projects (check out my projects!) utilizing Javascript and its relative frameworks. 
                            
                            <br/> <br/>

                            At this time, I am currently seeking opportunities that best suit me and where I can continue to expand my knowledge in software development. My ultimate goal is to continue
                            to grow in this career path and be able to utilize my skills to work alongside a team and make an impact in real-world projects. <br/> <br/>
            

                            Some of my interests include basketball, latin dancing, automotive repair, technology and many engineering and problem solving topics. I enjoy
                            learning new things and meeting new people who have simialr or different intrests. I also enjoy teaching and helping others
                            when possible and learning from others as well. <br/>

                            
                            

                        </p> 

                        <div className="icons">

                            <i id ="bball" className="material-icons">sports_basketball</i>
                            {/* <i id ="skate" className="material-icons">skateboarding</i> */}
                            <i id ="hman" className="material-icons">handyman</i>
                            <i id ="mem" className="material-icons">memory</i>
                            <i id ="calc" className="material-icons">calculate</i>
                            <i id ="func" className="material-icons">functions</i>



                        </div>

                       <p id = "contact">Contact me at: <a href = 'mailto:gerardo.tor23@gmail.com'>gerardo.tor23@gmail.com</a></p>
                    </div>

                </main>
            // </div>




    )
}

export default About