import React from 'react';

const eventReview = ( props ) => {
    const details = Object.keys(props.info)
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>
                        : {props.info[igKey]}
                    </li>
                );
            })
    return (
        <>
            <h3>Your event</h3>
            <p>Details of your event:</p>
            <ul>
                {details}
            </ul>
        </>
    );
}
    
export default eventReview;