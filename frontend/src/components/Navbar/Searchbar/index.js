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
        searchWord.length > 0 ? history.push(`/search/${searchWord}`) : alert('Please enter a search word.')
        return setSearchWord('')
    }

    const handleCancel = (e) => {
        e.preventDefault();
        return setSearchWord('');
    }

    return (
        <div className={styles.searchbar}>
            <div className={styles.iconBox}>
                <img src={magnify} className={styles.magnify} alt='Search icon'/>
            </div>
            <form className={styles.form} onSubmit={handleSearch}>
                <input
                    className={styles.input}
                    type='search'
                    placeholder="Search CookNook"
                    spellCheck='on'
                    autoComplete="off"
                    maxLength='100'
                    minLength='1'
                    value={searchWord}
                    onChange={e => setSearchWord(e.target.value)}
                />
            </form>
            <div className={styles.iconBox} onClick={handleCancel}>
                {searchWord.length > 0 &&
                <img src={cancel} className={styles.cancel} alt='Cancel icon'/>
                }
            </div>
        </div>
    )
};
