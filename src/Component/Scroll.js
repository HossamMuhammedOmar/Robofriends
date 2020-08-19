import React from 'react';

const Scroll = function (props) {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '1px solid #2c3e50',
        height: '710px',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
