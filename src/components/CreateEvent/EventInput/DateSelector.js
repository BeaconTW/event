import React from 'react';

import classes from './DateSelector.module.css';

const dateSelector = ( props ) => (
    <>
        <p className={classes.Title}>{props.children}</p>
        <div className={classes.TimePicker}>
            <input className={classes.SelectorStart} type="date" ></input>
            <input className={classes.SelectorEnd} type="time"></input>
        </div>
    </>

);

export default dateSelector;