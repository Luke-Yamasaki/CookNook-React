//Hooks
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

//actions
import { logout } from '../../../../store/session';
import { hideModal } from '../../../../store/modal';

//styles
import styles from './Profile.module.css';

export const ProfileModal = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        dispatch(hideModal());
        return history.push('/welcome');
    }

    return (
        <ul className={styles.list}>
            <li className={styles.item}>
                <div>{user.username}</div>
            </li>
            <li className={styles.item}>
                <div>{user.email}</div>
            </li>
            <li className={styles.item}>
                <div className={styles.logout} onClick={handleLogout}>Log Out</div>
            </li>
        </ul>
    )
}
