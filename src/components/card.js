import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip'
import {FaLink} from 'react-icons/fa'
import {DiGithubFull} from 'react-icons/di'


const Card = ({project}) =>{

    const [isFlipped, setIsFlipped] = useState(false); 

    return (

            <>
                <ReactCardFlip  isFlipped = {isFlipped} flipDirection='horizontal' flipSpeedBackToFront = '0.3'	flipSpeedFrontToBack = '0.3'>

                    {/* ----------------------ON FRONT VIEW ----------------------*/}
                    <div style = {{backgroundImage: `url(${project.image})`}} className = 'card-front' id = {`cell${project.id}`} >

                            <div onClick = {() => setIsFlipped(!isFlipped)} className = 'flipper pointer'> <i id ="flip-button" className="material-icons">sync_alt</i> </div>  

                    </div>



                    {/* ------------------ON BACK VIEW ----------------------*/}
                    <div className = 'card-back' >

                            <h1 className="title1">{project.title}</h1>
                            <div id = 'description'><h2 className = 'description' id = {`desc${project.id}`}>{project.description}</h2></div>
                            <div className = 'links'>
                                <a href = {`${project.github}`} target='_blank' rel='noopener noreferrer' title = 'Repo Link'> <DiGithubFull id = 'gitlink' /> </a>
                                
                                {project.url ? <a href = {`${project.url}`} target='_blank' rel='noopener noreferrer' title = 'Deployment Link'> <FaLink id = 'deploylink'/> </a> : null}

                            </div> 
                            

                            <div onClick = {() => setIsFlipped(!isFlipped)} className = 'flipper pointer'><i id ="flip-button" className="material-icons">sync_alt </i> </div>

                    </div>


                </ReactCardFlip>
                        
            </>


    )
}

export default Card