import React from 'react';

export default function Footer() {
  return (
    <div style={containerStyle}>
      <footer style={footerStyle}>
        <div className="icon">Icon 1</div>
        <div className="icon">Icon 2</div>
        <div className="icon">Icon 3</div>
      </footer>
    </div>
  );
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensure the container takes the full viewport height
  };
  
  const footerStyle = {
    marginTop: 'auto', // Push the footer to the bottom
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: '#333',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
