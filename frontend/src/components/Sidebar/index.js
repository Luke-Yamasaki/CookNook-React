//components
import { Link } from "react-router-dom"

//images
import vegetable from '../../Assets/Images/topics/square/topic1.png';
import tofu from '../../Assets/Images/topics/square/topic1.png';
import pasta from '../../Assets/Images/topics/square/topic1.png';
import chicken from '../../Assets/Images/topics/square/topic1.png';
import beef from '../../Assets/Images/topics/square/topic1.png';
import pork from '../../Assets/Images/topics/square/topic1.png';
import fish from '../../Assets/Images/topics/square/topic1.png';
import shellfish from '../../Assets/Images/topics/square/topic1.png';
import grilling from '../../Assets/Images/topics/square/topic1.png';
import desserts from '../../Assets/Images/topics/square/topic1.png';

export const Sidebar = () => {
    return (
        <aside>
            <div>Browse Topics</div>
            <Link to='/topics/1'>
                <img src={vegetable} alt='link to questions about vegetables.'/>
                <div>Vegetables</div>
            </Link>
            <Link to='/topics/2'>
                <img src={tofu} alt='link to questions about tofu.'/>
                <div>Tofu</div>
            </Link>
            <Link to='/topics/3'>
                <img src={pasta} alt='link to questions about pasta.'/>
                <div>Pasta</div>
            </Link>
            <Link to='/topics/4'>
                <img src={chicken} alt='link to questions about chicken.'/>
                <div>Chicken</div>
            </Link>
            <Link to='/topics/5'>
                <img src={beef} alt='link to questions about beef.'/>
                <div>Beef</div>
            </Link>
            <Link to='/topics/6'>
                <img src={pork} alt='link to questions about pork.'/>
                <div>Pork</div>
            </Link>
            <Link to='/topics/7'>
                <img src={fish} alt='link to questions about fish.'/>
                <div>Fish</div>
            </Link>
            <Link to='/topics/8'>
                <img src={shellfish} alt='link to questions about shellfish.'/>
                <div>Shellfish</div>
            </Link>
            <Link to='/topics/9'>
                <img src={grilling} alt='link to questions about grilling.'/>
                <div>Grilling</div>
            </Link>
            <Link to='/topics/10'>
                <img src={desserts} alt='link to questions about desserts.'/>
                <div>Desserts</div>
            </Link>
        </aside>
    )
}
