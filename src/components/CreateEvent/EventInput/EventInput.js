import React from 'react';

import classes from './EventInput.module.css';

const eventInput = ( props ) => (
    <>
        <p className={classes.Title}>{props.children}</p>
        <input  className={classes.Input}  
                type={props.type}
                required={props.required} 
                onChange={ (event) => props.changed(event)}>
        </input>
    </>
);


export default eventInput;