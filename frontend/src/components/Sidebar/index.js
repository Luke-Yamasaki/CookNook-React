//components
import { Link } from "react-router-dom"

//styles
import styles from './Sidebar.module.css';

//topics
import { topics } from '../../topics';

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.title}>Browse Topics</div>
            {topics.map(topic =>
                <Link key={topic.id} className={styles.link} to={`/topics/${topic.id}`}>
                    <img className={styles.image} src={topic.image} alt={`Link to questions about ${topic.low}`}/>
                    <div className={styles.topic}>{topic.cap}</div>
                </Link>
            )}
        </aside>
    )
}
