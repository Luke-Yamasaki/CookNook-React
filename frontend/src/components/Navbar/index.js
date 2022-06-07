//Hooks
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

//components
import ProfileButton from './ProfileButton';
import { Searchbar } from './Searchbar';

//Logo
import logo from '../../Assets/Logo/white.png';

//styles
import styles from './Navbar.module.css';

function Navbar(){
  const sessionUser = useSelector(state => state.session.user);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink to='/' className={styles.logoLink}>
            <img src={logo} alt="CookNook's Logo." className={styles.logo} />
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to='/questions' className={styles.navLink}>Questions</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to='/topics' className={styles.navLink}>Topics</NavLink>
        </li>
        <li className={styles.navItem}>
          <Searchbar />
        </li>
        <li className={styles.navItem}>
          <ProfileButton user={sessionUser} />
        </li>
        <li className={styles.navItem}>
          <div className={styles.question}>
            Add a question
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
