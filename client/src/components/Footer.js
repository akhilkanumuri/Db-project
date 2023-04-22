import React from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
    backgroundColor: '#f2f2f2',
    padding: '20px'
  };

  const logoStyle = {
    width: '100px',
    height: '100px',
    marginRight: '20px'
  };

  const textStyle = {
    fontWeight: 'bold'
  };

  const aboutStyle = {
    color: 'rgb(125, 243, 125)',
    fontSize: '20px',
    marginRight: '20px'
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <footer style={footerStyle}>
      <img src={Logo} alt="logo" style={logoStyle} />
      <Link className='link' to='/about'>
        <h6 style={aboutStyle}> About Us</h6>
      </Link>
      <span style={textStyle}>
        Made with <b>React.js and MySQL</b>
      </span>
      
    </footer>
  );
};

export default Footer;
