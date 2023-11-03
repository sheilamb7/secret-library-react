import React, { Component } from 'react';
import axios from 'axios';

import PromptModal from '../modal/promptModal';
import PromptModalSimple from '../modal/promptModalSimple';

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
            prompts_completed_book: prompts_completed_book,
            promptModalisOpen: false
        }
        
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

    handleModalClose() {
        this.setState({
            promptModalisOpen: false
        })
    }

    handleOpenModal() {
        this.setState({
            promptModalisOpen: true
        })
    }

    addBook(inputedBook){
        
        axios({
            method: "put", 
            url: `https://secret-library-api.onrender.com/prompts/${this.state.prompts_id}`,
            data: {
                "prompts_id": this.state.prompts_id,
                "prompts_challenge_id": this.state.prompts_challenge_id,
                "prompts_content": this.state.prompts_content,
                "prompts_completed": this.state.prompts_completed ,
                "prompts_completed_book": inputedBook}
                })
        .then (response => {
            //console.log(response)
            this.setState({
                prompts_completed_book: inputedBook
            })
        }) 
        .catch(error => {
            console.log("Error on updating this prompt", error)
        })
    }
    
    render () {
        return (
            <li>
                <PromptModal
                modalIsOpen={this.state.promptModalisOpen}
                handleModalClose={this.handleModalClose()} 
                completed_book={this.state.prompts_completed_book}
                prompt_content={this.state.prompts_content}
                // inputBook={this.addBook}
                />
            <div className='prompt_container' onClick={() => this.handleOpenModal}>
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