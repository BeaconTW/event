import React from 'react';

import classes from './StartDateSelector.module.css';

const startDateSelector = ( props ) => (
    <>
        <p className={classes.Title}>{props.children}</p>
        <div className={classes.TimePicker}>
            <input className={classes.SelectorDate}
                   onChange={ (event) => props.changedDate(event)}
                   type="date" ></input>
            <input className={classes.SelectorTime} 
                    onChange={ (event) => props.changedTime(event)}
                    type="time"></input>
        </div>
    </>

);

export default startDateSelector;