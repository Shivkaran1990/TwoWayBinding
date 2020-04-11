import React from 'react';

const inputfile=(props) =>{

    const style={
        border :'2px solid yellow'
    }

    return <input type='text'
    style={style}
     onChange={props.changes} 
     value={props.currentName}
     />
};

export default inputfile;