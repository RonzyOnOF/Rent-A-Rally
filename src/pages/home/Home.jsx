import civic from '../../../public/images/redcivic.png';
import carCover from '../../../public/images/smallerCover.png';
import styles from './Home.module.css';

export const Home = () => {
    return (
        <>
            <div className={styles.frontCover} >
                <img src={carCover} className={styles.coverCar} />
                <p id={styles.coverText}>Rent as little as <strong>$45/day</strong></p>
            </div>
        </>
    )
}