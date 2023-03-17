import React from 'react';

const Button = ({ onHandleClick, background = 'transparent', title = '', children }) => {
  return (
    <button onClick={onHandleClick} style={{ backgroundColor: background }}>
      {title && <span>{title}</span>}
      {children}
    </button>
  );
};

export default Button;
