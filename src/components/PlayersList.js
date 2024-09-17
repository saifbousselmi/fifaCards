// src/components/PlayersList.js
import React from 'react';
import Player from './Player'; // Update the import path
import players from '../players'; // Import from the parent directory

const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent : "space-around" , marginTop : "5%"}}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
