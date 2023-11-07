import React, { Component } from 'react';
import PromptItem from './prompt_item';
import axios from 'axios';

export default class PromptsList extends Component {
    constructor(props){
       super(props);

       this.state = {
            challengeId: props.challenge_id, //esto será un prop que vendrá de ChallengeContent
            promptList: [],
            isLoading: true
       }
    }

    getPromptsFromId(){
        axios.get(`https://secret-library-api.onrender.com/prompts_list/${this.state.challengeId}`)
        .then(response => {
           this.setState({
              promptList: response.data,
              isLoading: false
           })
        }).catch(error => {
           console.log("ERROR on getPromptsFromId: ", error)
        })
    }

    prompts() {
        return this.state.promptList.map( (prompt) => {
            return <PromptItem key={prompt.prompts_id} promptItem={prompt} />
        })
    }
    
    componentDidMount(){
    this.getPromptsFromId();
    }


   render(){
       return (
         <div className='prompt_list_container'>
            {/* {this.state.isLoading ? 
               <div className='content-loading info'>
                  <div className='loader-image loading-image'></div>
                  <div>Excuse us while the bookworms fetch the challenges: they're slow!</div></div>
            : null } */}
            

            {this.prompts()}
         </div>
       );
   }
}