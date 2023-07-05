import styles from './About.module.css';
import { useNavigate } from 'react-router-dom';

export const About = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.aboutPageContainer}>
                <h2>About</h2>
                <div className={styles.aboutContainer}>
                    <div className={styles.missionStatement}>
                        <h3>Mission Statement</h3>
                        <p>Our mission here at Rent-A-Rally is to provide adventurers with only the best possible options of cars for them to embark on their road trips and adventures.</p>
                    </div>
                    <h4>We're Different</h4>
                    <p>While there are many doing similar things to what we do, we strive for an experience like no others that focuses not only on the car, but on the individual and their experience with us.</p>
                    <button onClick={() => navigate('/contact')}>Contact</button>
                </div>
            </div>
        </>
    )
}