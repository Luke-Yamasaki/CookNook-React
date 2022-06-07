//Hooks
import { useState } from "react"
import { useHistory } from "react-router-dom";

//Icons
import magnify from '../../../Assets/Icons/magnify.png';
import cancel from '../../../Assets/Icons/cancel.png';

//styles
import styles from './Searchbar.module.css';

export const Searchbar = () => {
    const [searchWord, setSearchWord] = useState('');
    const history = useHistory();

    const handleSearch = (e) => {
        e.preventDefault();
        searchWord.length > 0 ? history.push(`/search${searchWord}`) : alert('Please enter a search word.')
        return setSearchWord('')
    }

    return (
        <div className={styles.searchbar}>
            <img src={magnify} className={styles.icon} alt='magnify icon'/>
            <form className={styles.form} onSubmit={handleSearch}>
                <input className={styles.input} type='search' placeholder="Search CookNook" spellCheck='on' autoComplete="off" maxLength='100' minLength='1' />
            </form>
            <img src={cancel} className={styles.icon} alt='search icon'/>
        </div>
    )
};
