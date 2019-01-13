import React, { Component } from 'react';

import classes from './CreateEvent.module.css';
import EventInput from './EventInput/EventInput';
import DateSelector from './EventInput/DateSelector';
import Description from './EventInput/Description';


class createEvent extends Component {
    state = {
        eventTitle: 'Event Title',
        location: 'Location',
        Starts: 'Starts',
        Ends: 'Ends'
    }

    titleInputHandler = (event) => {
        this.setState({ eventTitle: event.target.value });
    }

    locationInputHandler = ( event ) => {
        this.setState({ location: event.target.value});
    }

    
    render() {
        return (
        <>
            <EventInput type="text" 
                        changed={(event) => this.titleInputHandler(event)}
                        required>
                Event Title
            </EventInput>
            <EventInput type="text" 
                        changed={(event) => this.locationInputHandler(event)}
                        required>
                Location
            </EventInput> 
            <DateSelector>Starts</DateSelector>
            <DateSelector>Ends</DateSelector>
            <Description type="text">Description</Description>
            <button className={classes.ConfirmBtn}>Confirm</button>
        </>
        );
    } 
}



export default createEvent;


