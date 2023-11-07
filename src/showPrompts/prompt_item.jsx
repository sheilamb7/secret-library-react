import React, { Component } from 'react';
import axios from 'axios';

export default class PromptItem extends Component {
    state = {
        showForm: false,
        bookValue: this.props.promptItem.prompts_completed_book, 
        reload: false
    }

    handlePromptClick = () => {
        this.setState({ showForm: true })
    }

    addBookEvent = event => {
        event.preventDefault();
        const inputedBook = event.target.value;
        this.setState({
            bookValue: inputedBook
        })
    }

    addBook = event => {
        event.preventDefault();
        const bookValue = this.state.bookValue;

        axios({
            method: "patch", 
            url: `https://secret-library-api.onrender.com/prompts/${this.props.promptItem.prompts_id}`,
            data: {
                "prompts_id": this.props.promptItem.prompts_id,
                "prompts_challenge_id": this.props.promptItem.prompts_challenge_id,
                "prompts_content": this.props.promptItem.prompts_content,
                "prompts_completed": this.props.promptItem.prompts_completed,
                "prompts_completed_book": bookValue
            }
        })
        .then(response => {
            this.setState({
                showForm: false
            });
            // console.log(response);
            // console.log(this.state.bookValue)
            
        }) 
        .catch(error => {
            console.log("Error on updating this prompt", error)
        })
    }
    
    render () {
        const { prompts_id, prompts_challenge_id, prompts_content, prompts_completed, prompts_completed_book } = this.props.promptItem;

        return (
            <>
                <div className='prompt_container' onClick={this.handlePromptClick}>
                    {this.state.bookValue  && !this.state.showForm ? (
                        <div className='prompt_name prompt_complete'>
                            {prompts_content}
                        </div>
                    ) : (
                        <div className='prompt_name prompt_uncomplete'>
                            {prompts_content}
                        </div>
                    )}
                        
                    
                    {this.state.showForm ? (
                        <div className='book_input'>
                            <form onSubmit={this.addBook} >
                                <input 
                                    type='text'
                                    value={this.state.bookValue}
                                    maxLength="100"
                                    onChange={this.addBookEvent}
                                />
                                <button>Save</button>
                            </form>
                        </div>
                    ) : (
                        <div className='prompt_book'>{this.state.bookValue}</div>
                    )}
                </div>
            </>
        );
    }
}