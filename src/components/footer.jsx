import React from 'react';

function Footer({ color }) {
  const footerStyle = {
    backgroundColor: '#87CEEB',
    marginBottom:"0px" ,
    textAlign: 'center',
    color: color || 'black' // use the provided color prop, or default to black
  };

  return (
    <footer style={footerStyle}>
      <p>ICT Academy</p>
    </footer>
  );
}

export default Footer;
