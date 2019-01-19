import React, { Component } from 'react';

import classes from './CreateEvent.module.css';
import EventInput from './EventInput/EventInput';
import StartDateSelector from './EventInput/StartDateSelector';
import EndDateSelector from './EventInput/EndDateSelector';
import Description from './EventInput/Description';
import EventReview from './EventReview/EventReview';
import Modal from '../UI/Modal/Modal';


class createEvent extends Component {
    state = {
        details : {
            eventTitle: undefined,
            location: undefined,
            startDate: undefined,
            startTime: undefined,
            endDate: undefined,
            endTime: undefined,
            description: undefined
        },
        creating: false,
        

    }

    titleInputHandler = (event) => {
        const newTitle = event.target.value;
        const updatedDetails = {
            ...this.state.details
        }
        updatedDetails['eventTitle'] = newTitle;
        this.setState({ details : updatedDetails });
        
    }

    locationInputHandler = ( event ) => {
        const newLocation = event.target.value;
        const updatedDetails = {
            ...this.state.details
        }
        updatedDetails['location'] = newLocation;
        this.setState({ details : updatedDetails });
        
    }

    startDateSelectHandler = ( event ) => {
        const newStartDate = event.target.value;
        const updatedDetails = {
            ...this.state.details
        }
        updatedDetails['startDate'] = newStartDate;
        this.setState({ details : updatedDetails });
        
    }

    startTimeSelectHandler = ( event ) => {
        const newStartTime = event.target.value;
        const updatedDetails = {
            ...this.state.details
        }
        updatedDetails['startTime'] = newStartTime;
        this.setState({ details : updatedDetails });
        
    }

    endDateSelectHandler = ( event ) => {
        const newEndDate = event.target.value;
        const updatedDetails = {
            ...this.state.details
        }
        updatedDetails['endDate'] = newEndDate;
        this.setState({ details : updatedDetails });
        
    }

    endTimeSelectHandler = ( event ) => {
        const newEndTime = event.target.value;
        const updatedDetails = {
            ...this.state.details
        }
        updatedDetails['endTime'] = newEndTime;
        this.setState({ details : updatedDetails });
        
    }

   descriptionHandler = ( event ) => {
        const newDescription = event.target.value;
        const updatedDetails = {
            ...this.state.details
        }
        updatedDetails['description'] = newDescription;
        this.setState({ details : updatedDetails });
        
   }

   creatingHandler = () => {
    const currentDetails = this.state.details;   
    for (let evKey in currentDetails){
        console.log(typeof(currentDetails[evKey]));
        if (typeof(currentDetails[evKey]) === "undefined"){
            console.log('Please fill all the info');
            this.setState({ creating : false });
        }else{
            this.setState({ creating : true });
        }
    }
   }

   creatingClosedHandler = () => {
       this.setState({ creating: false });
   }


    

    
    render() {
        return (
        <>
            <Modal show={this.state.creating} modalClosed={this.creatingClosedHandler}>
                <EventReview info={this.state.details} />
            </Modal>

            <EventInput type="text" 
                        changed={(event) => this.titleInputHandler(event)}
                        required>
                Event Title
            </EventInput>
            <EventInput type="text" 
                changed={(event) => this.locationInputHandler(event)}>
                Location
            </EventInput> 
            <StartDateSelector 
                changedDate={(event) => this.startDateSelectHandler(event)}
                changedTime={(event) => this.startTimeSelectHandler(event)}
                >Starts</StartDateSelector>
            <EndDateSelector
                changedDate={(event) => this.endDateSelectHandler(event)}
                changedTime={(event) => this.endTimeSelectHandler(event)}
                >Ends</EndDateSelector>
            <Description type="text"
                    descriptionInput={(event)=> this.descriptionHandler(event)}
                    >Description</Description>
            <button 
                className={classes.ConfirmBtn} 
                onClick={this.creatingHandler}>Confirm</button>
        </>
        );
    } 
}



export default createEvent;


