import React from 'react';
import NavBar from './navigation/navbar';
import Body from './body';

export default function App() {        
  return (
    <div style={{backgroundColor: "#2c3133"}}>
      <div id="AppContainer">
        <NavBar/>
        <Body/>
      </div>
    </div>
  );
}