import React from 'react';
import {functions} from '../../functions';
import './Editor.css';
import Tabs from '../tabs/Tabs';
import Write from '../write/Write';
import Preview from '../preview/Preview';

export default function Editor(){
    const [isPreview, setIsPreview] = React.useState(false);
    const [markdown, setMarkDown] = React.useState('Type here');

    function handleChange (event){
        setMarkDown(event.target.value);
        console.log(markdown);
    }

    function toggleWrite(){
        setIsPreview(prevState => false);
    }

    function togglePreview (event){
        setIsPreview(prevState => true);
    }

    function makeBold(){
        const selectedText = functions.getSelectedText();
        const currentMarkdown = markdown;
        console.log(currentMarkdown)
        const boldText = '**'+ selectedText +'**';
        const newMarkdown = currentMarkdown.replace(selectedText, boldText);
        setMarkDown(newMarkdown);
        console.log(boldText);
    }

    return (
        <div className='editor'>
            <Tabs
                isPreview={isPreview}
                togglePreview={togglePreview}
                toggleWrite={toggleWrite}
            />
            {isPreview
            ?
            <Preview
                markdown={markdown}/>
            :
            <Write
                markdown={markdown}
                handleChange={handleChange}
                makeBold={makeBold}
            />
            }
            <button onClick={functions.getText}>Save note</button>
        </div>
    )
}