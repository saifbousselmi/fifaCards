// src/components/Player.js
import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    const cardStyle = {
        width: '18rem',
        margin: '10px',
        textAlign: 'center',
        backgroundColor: 'gray', 
      };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={name} className="player-img" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}
        </Card.Text>
        <Card.Text>
          <strong>Nationality:</strong> {nationality}
        </Card.Text>
        <Card.Text>
          <strong>Jersey Number:</strong> {jerseyNumber}
        </Card.Text>
        <Card.Text>
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown',
  jerseyNumber: 'N/A',
  age: 'N/A',
  imageUrl: 'https://via.placeholder.com/150'
};

export default Player;
