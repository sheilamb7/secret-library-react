import React, { Component } from 'react';
import axios from 'axios';

export default class PromptItem extends Component {
    state = {
        showForm: false,
        bookValue: this.props.promptItem.prompts_completed_book
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
        const bookValue = this.state.bookValue

        axios({
            method: "patch", 
            url: `http://127.0.0.1:8000/prompts/${this.props.promptItem.prompts_id}`,
            data: {
                "prompts_id": this.props.promptItem.prompts_id,
                "prompts_challenge_id": this.props.promptItem.prompts_challenge_id,
                "prompts_content": this.props.promptItem.prompts_content,
                "prompts_completed": this.props.promptItem.prompts_completed,
                "prompts_completed_book": bookValue
            }
        })
        .then(response => {
            console.log(response)
            this.setState({
                showForm: false, 
                bookValue: "",
                prompts_completed_book: bookValue
            })

            // call a callback function to update the parent component's state with the new book value
            //this.props.onBookAdd(this.props.promptItem.prompts_id, bookValue);
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
                    {prompts_completed_book ? (
                        <div className='prompt_name prompt_complete'>
                            {prompts_content}
                        </div>
                    ) : (
                        <div className='prompt_name prompt_uncomplete'>
                            {prompts_content}
                        </div>
                    )}
                        
                    <div className='prompt_book'>{prompts_completed_book}</div>

                    {this.state.showForm && (
                        <div className='book_input'>
                            <form onSubmit={this.addBook} >
                                <input 
                                    type='text'
                                    value={this.state.bookValue}
                                    onChange={this.addBookEvent}
                                />
                                <button>Save</button>
                            </form>
                        </div>
                    )}
                </div>
            </>
        );
    }
}