import civic from '../../../public/images/redcivic.png';
import styles from './Home.module.css';

export const Home = () => {
    return (
        <>
            Home
            <img src={civic} className={styles.coverCar} />
        </>
    )
}