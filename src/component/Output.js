import React from 'react';
import './Output.css';

const output=(props) =>{

    return (
        <div className="Output">
            <p>User name :{props.username}</p>          
            <p>this is AweSome Bro... :)</p>
        </div>
    ) 
};

export default output;