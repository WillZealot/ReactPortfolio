import '../css/app.css'
import React from 'react';

export default function Footer(){
  return (
    <footer style={footerStyle}>
      <div className="icon">Icon 1</div>
      <div className="icon">Icon 2</div>
      <div className="icon">Icon 3</div>
    </footer>
  );
};

const footerStyle = {
    position: 'sticky',    // Make the footer sticky
    bottom: '0',           // Stick it to the bottom of the viewport
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // White background with 0.7 opacity
    color: '#333',         // Text color
    height: '60px',
    // Add more styles as needed
  };





