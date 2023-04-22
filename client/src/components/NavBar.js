import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import { AuthContext } from '../context/authContext';
import '../components/logo.css'

const NavBar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <a href='/'>
          <img src={Logo} alt='Logo' style={{ width: '200px', height: '200px' }} />

          </a>
        </div>
        <div className='links'>
          <Link className='link' to='/?cat=Apartment'>
            <h6>Apartment</h6>
          </Link>
          <Link className='link' to='/?cat=Mansion'>
            <h6>Mansion</h6>
          </Link>
          <Link className='link' to='/?cat=TinyHome'>
            <h6>Tiny home</h6>
          </Link>
          <Link className='link' to='/?cat=MobileHome'>
            <h6>Mobile home</h6>
          </Link>
          <Link className='link' to='/?cat=Duplex'>
            <h6>Duplex</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <a className='link' href='/login' style={{ color: 'rgb(125, 243, 125)'}}>
              <b>Login</b>
            </a>
          )}

          {/* <span style={{ color: 'rgb(125, 243, 125)'}}>
            <Link className='link' to='/write'>
              ,<b>Post Property</b>
            </Link>
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
