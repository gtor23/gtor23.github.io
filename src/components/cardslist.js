import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip'

import {Card} from './index'

const CardsList = ({cards}) =>{

    return (


        <>
            {cards.map(project => {

                return <Card project = {project} key = {project.id} />
            
            })}
        </>

    )
}

export default CardsList