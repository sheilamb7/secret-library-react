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
      axios.get('http://127.0.0.1:8000/challenges')
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
            <p className='challenge_title'>Titulo</p>
            <p>Prueba CSS</p>
          </div>
       );
   }
}