import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  const cardComponent = robots.map((user, i) => {
    return (
      <div key={robots[i].id}>
        <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
      </div>
    );
  });
  return (
    <div>
      <div className="container">{cardComponent}</div>
    </div>
  );
};

export default CardList;
