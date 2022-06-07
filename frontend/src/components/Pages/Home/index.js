//Hooks
// import { useSelector } from 'react-redux';

//components
import { Sidebar } from '../../Sidebar';

//styles
import styles from './Home.module.css';

export const Home = () => {
    // const questions = useSelector(state => state.questions)

    return (
        <div className={styles.wrapper}>
            <Sidebar />
            <section className={styles.feed}>
                {/*Object.values(questions).map(question =>
                    <Post key={question.id} question={question}>
                )*/}
            </section>
        </div>
    )
}
