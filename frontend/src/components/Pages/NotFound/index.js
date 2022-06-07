//styles
import styles from './NotFound.module.css';

export const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.message}>404... Sorry, we can't find what you're looking for.</h1>
                <img className={styles.image} src='https://cooknook.s3.amazonaws.com/ovenfire.jpg' alt='404 not found.' />
            </div>
        </div>
    )
}
