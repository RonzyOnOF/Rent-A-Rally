import slash from '../../../public/images/backgroundSlash.png';

import styles from './Car.module.css';


export const Car = ({ car }) => {
    return (
        <>
            <div className={styles.car}>
                <img src={car.image} />
                <div className={styles.carDescription}>
                    <p>{car.make}</p>
                    <p>{car.model}</p>
                    <p>{car.year}</p>
                    <p>{`$${car.cost}/day`}</p>
                    <p>{car.transmission}</p>
                    <p>{car.drivetrain}</p>
                </div>
                <img id={styles.slash} src={slash} />
            </div>
        </>
    )
}