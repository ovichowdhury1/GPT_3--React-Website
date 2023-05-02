import React from 'react';
import './Feature.css';
const Feature = ({title,text}) => {
    return (
        <div className='gpt3__whatgpt3-container_feature'>
            <div className='gpt3__whatgpt3-container_feature-title'>
                <div className='bar'></div>
                <h1>{title}</h1>   
            </div>
            <div className='gpt3__whatgpt3-container_feature-text'>
                 <p>{text}</p>
            </div>
             
        
        </div>
    );
};

export default Feature;