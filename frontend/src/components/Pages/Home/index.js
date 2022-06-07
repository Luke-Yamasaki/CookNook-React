//Hooks
// import { useSelector } from 'react-redux';

//styles
import styles from './Home.module.css';

export const Home = () => {
    // const questions = useSelector(state => state.questions)

    return (
        <div className={styles.wrapper}>
            {/*sidebar*/}
            <section className={styles.section}>
                {/*Object.values(questions).map(question =>
                    <Post key={question.id} question={question}>
                )*/}
            </section>
        </div>
    )
}
