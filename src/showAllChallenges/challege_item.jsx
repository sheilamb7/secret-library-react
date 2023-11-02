import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
    const {
        challenges_id,
        challenges_name,
        challenges_description
    } = props.challengeItem

    const dataLink = {
        challenge_id : challenges_id
    }

    return (
        <div className="challenges_container">
            <Link to={`/challenges/${challenges_id}`} state={{challenges_id, challenges_name}}>
                <div className='challenge_title'>{challenges_name}</div>
            </Link>
            <div className='challenge_description'>{challenges_description}</div> 
        </div>
    );
}