import React from 'react';
import './Card.css';

const Card = ({id,name,email,animateCard}) => {
    return(
        <div className='RobotCard' onMouseOver={animateCard}>
            <img src={`https://robohash.org/${id}?size=150x150`} alt='profil'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}



export default Card;