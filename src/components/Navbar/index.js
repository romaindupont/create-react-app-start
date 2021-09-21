import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';


const Navbar = ({ isConnected, logout, is_admin, userList }) => {
    const logOut = () => {
        logout();
    }
    const importUser = () => {
      userList();
    }
 return (
  <nav className="navbar">
    {!isConnected ? (
    <>
      <li><Link to="/">Connexion</Link></li>
      <li><Link to="/register">Inscription</Link></li>
    </>
    ) : (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/user">My Profile</Link></li>
      <li><Link to="/" onClick={logOut}>Logout</Link></li>
      {is_admin === 1 ? (
        <li><Link to="/admin" onClick={importUser}>Administration</Link></li>
      ) : (
      <></>
      )}
    </>
    )}
  </nav>
 )
}

export default Navbar;
