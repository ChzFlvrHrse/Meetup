import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div className="login-signup">
          <div >
            <NavLink className='login' to="/login">Log in</NavLink>
          </div>

          <div >
            <NavLink className='signup' to="/signup">Sign up</NavLink>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="nav">
      <div>
        <NavLink id="logo" exact to="/">MetUp</NavLink>
      </div>

      {/* <div>
      <img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png' alt="meetup logo"/>
      </div> */}

      <div className='user'>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation
