import React from 'react';
import './Textarea.css';

export default function Textarea(props){
    return(
        <div className='Textarea'>
            <textarea
                value={props.markdown}
                onChange={props.handleChange}
                className='text-area'>
            </textarea>
        </div>
    )
}