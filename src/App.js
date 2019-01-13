import React, { Component } from 'react';


import Toolbar from './components/Navigation/Toolbar/Toolbar';
import CreatEvent from './components/CreateEvent/CreateEvent';
class App extends Component {

  
  
  render() {
    var style= {
      margin: '150px'
    }
    return (
      <>
        <Toolbar />
        <div style={style}>
        <CreatEvent style={style} />
        </div>
        
      </>
    );
  }
}

export default App;
