import React, { Component } from 'react';
import axios from 'axios';

import PromptModal from '../modal/promptModal';

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
    
    render () {
        return (
            <li>
                <PromptModal
                modalIsOpen={this.state.promptModalisOpen}
                handleModalClose={this.handleModalClose()} 
                promptItem={this.props.promptItem}
                />
            <div className='prompt_container' onClick={() => this.setState({promptModalisOpen : true})}>
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