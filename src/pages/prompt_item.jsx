import React, { Component } from 'react';
import axios from 'axios';

export default class PromptItem extends Component {
    constructor(props) {
        super(props);
        const {
            prompts_id,
            prompts_challenge_id,
            prompts_content,
            prompts_completed,
            prompts_completed_book
        } = this.props.promptItem

        this.state = {
            prompts_id: prompts_id,
            prompts_challenge_id: prompts_challenge_id,
            prompts_content: prompts_content,
            prompts_completed: prompts_completed,
            prompts_completed_book: prompts_completed_book
        }
        
        this.addBook = this.addBook.bind(this);
    }


    // componentDidMount() {
    //     if (Object.keys(this.props.promptItem).length > 0) {
    //         const {
    //             prompts_id,
    //             prompts_challenge_id,
    //             prompts_content,
    //             prompts_completed,
    //             prompts_completed_book
    //         } = this.props.promptItem
        
           
    //     }

    // }

    addBook(event) {
        const book = prompt("Insert a book for: " + this.state.prompts_content, this.state.prompts_completed_book)

        axios({
            method: "put", 
            url: `https://secret-library-api.onrender.com/prompts/${this.state.prompts_id}`,
            data: {
                "prompts_id": this.state.prompts_id,
                "prompts_challenge_id": this.state.prompts_challenge_id,
                "prompts_content": this.state.prompts_content,
                "prompts_completed": this.state.prompts_completed ,
                "prompts_completed_book": book}
                })
        .then (response => {
            console.log(response)
            // this.setState({
            //     prompts_completed_book: book
            // })
        }) 
        .catch(error => {
            console.log("Error on updating this prompt", error)
        })
        
    }
    
    render () {
        return (
            <li>
            <div className='prompt_container' onClick={() => this.addBook()}>
                {this.state.prompts_completed_book ? (
                <div className='prompt_name prompt_complete'>
                    {this.state.prompts_content}
                </div>
                ) : (
                <div className='prompt_name prompt_uncomplete'>
                    {this.state.prompts_content}
                </div>
                )}
                    
                <div className='prompt_book'>{this.state.prompts_completed_book}</div>
            </div></li>
        );
    }
}