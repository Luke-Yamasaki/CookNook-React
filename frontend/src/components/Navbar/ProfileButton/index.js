//Hooks
import React, { useState } from "react";
import { useDispatch } from 'react-redux';

//styles
import styles from './ProfileButton.module.css';

//actions
import { logout } from '../../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const handleDropDown = (e) => {
    e.preventDefault();
    return setShowMenu(!showMenu)
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className={styles.userBox}>
      <div className={styles.info} onClick={handleDropDown}>
        <img className={styles.image} src="https://cooknook.s3.amazonaws.com/user-profile.png" alt='User profile.' />
        <div>{`Hello ${user.username}`}</div>
      </div>
      {showMenu && (
        <ul className={styles.list}>
          <li className={styles.item}>{user.username}</li>
          <li className={styles.item}>{user.email}</li>
          <li className={styles.item}>
            <div className={styles.logout} onClick={handleLogout}>Log Out</div>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
