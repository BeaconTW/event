import React from 'react';

import classes from './Description.module.css';
const description = ( props ) => (
    <>
        <p className={classes.Title}>{props.children}</p>
        <textarea className={classes.Description}></textarea>
    </>
);



export default description;