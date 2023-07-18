import slash from '../../images/backgroundSlash.png';

import styles from './Car.module.css';
import { toggleModal } from '../../features/modal/modalSlice';
import { useDispatch } from 'react-redux';
import { setSingleCar  } from '../../features/cars/carsSlice';
import { useState, useEffect } from 'react';

export const Car = ({ car }) => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);


    
    const handleRentButton = () => {
        dispatch (setSingleCar(car));
        dispatch(toggleModal());
    }




    

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
                    <button id={styles.rentButton} onClick={handleRentButton}>Rent</button>
                </div>
                <img id={styles.slash} src={slash} />
            </div>
        </>
    )
}