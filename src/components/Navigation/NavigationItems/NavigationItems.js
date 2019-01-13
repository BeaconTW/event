import React from 'react';
import classes from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigatiomItems}>
        <NavigationItem link="/" active>Create Your Event</NavigationItem>
        <NavigationItem link="/">Events</NavigationItem>
    </ul>
);




export default navigationItems;