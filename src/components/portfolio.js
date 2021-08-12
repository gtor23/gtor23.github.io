import React from 'react';

import './portfolio.css';
import {Data} from './index'

const Portfolio =() =>{
    
    
    return (

            <div className = 'projects'>

                <h1 className="titleproj"> MY  <span id = 'title-projects'> PROJECTS </span> </h1>
                <div id = 'projcells'>
                    <div className = 'theprojects'>
                        <Data />
                    </div>
                </div>

            </div>
    )

}

export default Portfolio