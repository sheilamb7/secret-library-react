import React, { Component } from 'react';
import axios from 'axios';
import ChallengeItem from './challege_item'

export default class ChallengesList extends Component {
    constructor(){
       super();

       this.state = {
            data: [],
            isLoading: true
       }

       this.getChallenges = this.getChallenges.bind(this);
    }

    getChallenges(){
      // axios.get('https://secret-library-api.onrender.com/challenges')
      axios.get('http://127.0.0.1:8000/challenges')
      .then(response => {
         //console.log(response);
         this.setState({
            data: response.data,
            isLoading: false
        })
      })
      .catch(error => {
         console.log(error)
      })

    }

    challenges() {
      return this.state.data.map(item => {
         return <ChallengeItem key={item.challenges_id} challengeItem={item} />
      })
    }

    componentDidMount(){
      this.getChallenges()
    }
    
   render(){
       return (
          <div className='challenges_list_container'>
            
            <div className='info'>Welcome to the Secret Library! <br/>These are the challenges available right now:</div>

            {/* <div><a href={this.state.data.}>{this.state.data.challenges_name}</a></div>
            <p></p> */}
            {this.state.isLoading ? 
               <div className='content-loading'>
                  <div className='loader-image loading-image'></div>
                  <div className='info'>Excuse us while the bookworms fetch the challenges: they're slow!</div></div>
            : 
            this.challenges()
            }


          </div>
       );
   }
}