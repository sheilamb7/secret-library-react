import React, { Component } from 'react';
import axios from 'axios';
import ChallengeItem from './challege_item'

export default class ChallengesList extends Component {
    constructor(){
       super();

       this.state = {
            title: 'hello',
            data: []
       }

       this.getChallenges = this.getChallenges.bind(this);
    }

    getChallenges(){
      axios.get('https://secret-library-api.onrender.com/challenges')
      .then(response => {
         //console.log(response);
         this.setState({
            data: response.data
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
            {/* <div><a href={this.state.data.}>{this.state.data.challenges_name}</a></div>
            <p></p> */}
            {this.challenges()}
          </div>
       );
   }
}