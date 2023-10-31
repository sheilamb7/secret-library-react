```
import React from 'react';

export default function(props) {
    const {
        prompts_id,
        prompts_challenge_id,
        prompts_content,
        prompts_completed,
        prompts_completed_book
    } = props.promptItem


    

    return (
        <li>
        <div className='prompt_container'>
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
        </div></li>
    );
}
```