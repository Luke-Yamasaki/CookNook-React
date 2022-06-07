import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import styles from './Navbar.module.css';

function Navbar({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  return isLoaded && (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
        {sessionUser ?
        <ProfileButton user={sessionUser} />
        :
        <>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </>
        }
      </li>
    </ul>
  );
}

export default Navigation;
