import React from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';

import Header from '../header/header';
import PromptsList from './prompts_list';

const ChallengeContent = (props) => {

   const location = useLocation();
   const { challenges_id, challenges_name } = location.state; 
   //location.state nos pasa un objeto con challenges_id: 1, challenges_name: "whatever". Si hacemos el { ... } es ocmo que lo descomponemos. Nos ahorramos los siguientes pasos:
   // const data = location.state;
   // const {challenges_id, challenges_name } = data;

    

   //  Para coger los params del slug: {props.match.params.slug}

      //const {challenges_id, challenges_name, challenges_description} = this.props.item;
       return (
         <div className='main_container'>
            <Header />
            <div className='challenges_content'>
               <h2>{challenges_name}</h2>
               <PromptsList challenge_id={challenges_id}/>
            </div>
            
         </div>
       );
   
}

export default ChallengeContent;