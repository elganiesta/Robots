import React from 'react';
import Card from './Card';

const CardArray = ({robots,animations}) => {
    return (
        robots.map((user,i) => {
            return <Card key={i} id={robots[i].id} name={robots[i].username} email={robots[i].email} animateCard={animations} />
        } )
    )
}



export default CardArray;