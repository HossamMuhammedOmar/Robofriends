import React from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img alt="robot" src={`https://robohash.org/${id}`}></img>
      </div>
      <div className="card-info">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
