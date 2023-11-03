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
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }


    handleModalClose() {
        this.setState({
            promptModalisOpen: false
        }, () => 
        console.log('Close:', this.state.promptModalisOpen)
        )
    }

    handleOpenModal() {
        this.setState({
            promptModalisOpen: true
        }, () => 
        console.log('Open:', this.state.promptModalisOpen)
        )
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
            <>
            <PromptModal
            modalIsOpen={this.state.promptModalisOpen}
            handleModalClose={this.handleModalClose()} 
            // completed_book={this.state.prompts_completed_book}
            // prompt_content={this.state.prompts_content}
            // inputBook={this.addBook}
            />
            <div className='prompt_container' onClick={() => {this.handleOpenModal()}}>
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
            </div>
            </>
        );
    }
}