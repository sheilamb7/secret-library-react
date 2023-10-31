import React, { Component } from 'react';
import PromptItem from './prompt_item';
import axios from 'axios';

export default class PromptsList extends Component {
    constructor(props){
       super(props);

       this.state = {
            challengeId: props.challenge_id, //esto será un prop que vendrá de ChallengeContent
            promptList: []
       }
    }

    getPromptsFromId(){
        axios.get(`http://127.0.0.1:8000/prompts_list/${this.state.challengeId}`)
        .then(response => {
           console.log("prompt response", response);
           this.setState({
              promptList: response.data
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
            <ul>
            {this.prompts()}
            </ul>
         </div>
       );
   }
}