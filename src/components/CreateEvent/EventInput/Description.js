import React from 'react';

import classes from './Description.module.css';
const description = ( props ) => (
    <>
        <p className={classes.Title}>{props.children}</p>
        <textarea 
            className={classes.Description}
            onChange={ (event)=> props.descriptionInput(event)}>
        </textarea>
    </>
);



export default description;