import civic from '../../../public/images/redcivic.png';
import styles from './Home.module.css';

export const Home = () => {
    return (
        <>
            <div className={styles.frontCover} >
                <h2>Home</h2>
                <img src={civic} className={styles.coverCar} />
            </div>
        </>
    )
}