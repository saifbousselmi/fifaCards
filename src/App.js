import './App.css';
import React from 'react';
import PlayersList from './components/PlayersList';

const titleStyle = {
  padding: '10px',
  textAlign: 'center',
  marginLeft : "50px" ,
  color : "darkgrey",
  
};

function App() {
  return (
    <div className="App">
      <h1 style={titleStyle}>Elite Arabic Players : </h1>
      <PlayersList  />
    </div>
  );
}

export default App;

