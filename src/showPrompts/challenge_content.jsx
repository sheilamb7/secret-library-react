import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../header-footer/header';
import Footer from '../header-footer/footer';
import PromptsList from './prompts_list';

const ChallengeContent = () => {

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
               <div className='info'>These are the prompts you need to complete to finish this challenge. <b>Good luck!</b></div>
               <PromptsList challenge_id={challenges_id}/>
            </div>
            <Footer />
            
         </div>
       );
   
}

export default ChallengeContent;