import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip'

import {CardsList} from './index'
// import arcade from './images/arcade.png'

const Data = () =>{
    // const [isFlipped, setIsFlipped] = useState(false); 
      

    const data = [
        {   
            id: 1,
            title: 'Spade Station',
            github: 'https://github.com/gtor23/SpadeStation',
            url: 'https://jerry-spades-shopper.herokuapp.com/',
            description: 'Modern retail platform focused on preserving and collecting retro video games',
            // image: "url(/images/spade_station.png)"
            image: "/images/spade_station.png"
        },
        {
            id: 2,
            title: 'Fitness Trac.kr',
            github: 'https://github.com/gtor23/fitness_tracker_front_end',
            url: 'https://festive-clarke-e2e7b8.netlify.app/#/',
            description: 'Web application designed to follow routines and activities to achieve fitness goals',
            image: "/images/fitness_tracker.png"
            // image: "url(/images/fitness_tracker.png)"
        },

        {
            id: 3,
            title: "Stranger's Things",
            github: 'https://github.com/gtor23/StrangerThingsApp',
            url: 'https://sleepy-kepler-cda749.netlify.app/#/',
            description: 'Online marketplace for users to list their items for sale',
            image: "/images/strangers_things.png"
            // image: "url(/images/strangers_things.png)"
        },

        {
            id: 4,
            title: 'Arcade',
            github: 'https://github.com/gtor23/Arcade',
            url: 'https://happy-neumann-2f47d7.netlify.app/',
            description: 'Web arcade application featuring Tic-Tac-Toe and Whac-A-Mole',
            image: "/images/arcade.png"
            // image: "url(/images/arcade.png)"
        },
        {   
            id: 5,
            title: 'Stock Height Calculator',
            github: 'https://github.com/gtor23/Stock_Height_Calc',
            description: 'GUI application that calculates the aluminum stock size and required machining parallels',
            image: "/images/stock_height_calc.png"
            // image: "url(/images/stock_height_calc.png)"
        },
        {
            id: 6,
            title: 'Tool Search GUI',
            github: 'https://github.com/gtor23/Tool_Search_GUI_App',
            description: 'Desktop application for finding tool information in plant facility',
            image: "/images/tool_search_gui.png"
            // image: "url(/images/tool_search_gui.png)"
        },
        {
            id: 7,
            title: 'Art Collector',
            github: 'https://github.com/gtor23/Art_Collector',
            url: 'https://vigilant-feynman-f63d82.netlify.app/',
            description: 'Search engine for The Harvard Art Museums',
            image: "/images/art_collector.png"
            // image: "url(/images/art_collector.png)"
        },
        {
            id: 8,
            title: 'Calculator',
            github: 'https://github.com/gtor23/Calculator',
            url: 'https://eager-roentgen-ca2b94.netlify.app/',
            description: 'Classic calculator that handles basic math operations',
            image: "/images/calculator.png"
            // image: "url(/images/calculator.png)"
        },
        {
            id: 9,
            title: 'Retro Draw',
            github: 'https://github.com/gtor23/Retro_Draw',
            url: 'https://compassionate-wright-7d3fd5.netlify.app/',
            description: 'Pixel-based drawing application',
            image: "/images/retro_draw.png"
            // image: "url(/images/retro_draw.png)"
        },


    ];

    const [cards, setCards] = useState(data)

    // console.log('the cards arr',cards)

    // const handleClick = () => {
    //     setIsFlipped(!isFlipped);
    // }

    return(

        <CardsList cards = {cards} setCards = {setCards} />
        // <CardsList data = {data} />

        // <>

        //     {data.map((project, idx) => (

        //         <ReactCardFlip key = {project.id} isFlipped = {isFlipped} flipDirection='horizontal'>   
                
        //             <div className = {`cell${project.id} cell${project.id}front`} >
        //                 <div className = 'proj1' >
        //                     <h2 className="title1">{project.title}</h2> 
        //                     {/* {idx} */}
        //                     <button onClick = {handleClick} className ='flip pointer'>View</button>
        //                 </div>
        //             </div>


        //             <div className = {`cell${project.id}`}>
        //                 <div className = 'proj1'>  
        //                     <div className = 'links'>         
        //                         {/* <a href = ''>Link to GitHub</a>
        //                         <span>|</span>    
        //                         <a href = ''>Heroku</a> */}

        //                         <h1>hello</h1>
        //                     </div>    
        //                     <button onClick = {handleClick} className ='flip pointer'>View</button>  
        //                 </div>   
        //             </div>

        //         </ReactCardFlip>
        //     ))}


        
        // </>


    )



}

export default Data