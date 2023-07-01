
import styles from './SingleCar.module.css';
import { selectSingleCar } from '../../features/cars/carsSlice';
import { useSelector } from 'react-redux';

export const SingleCar = () => {

    const car = useSelector(selectSingleCar);


    return (
        <>
            <div className={styles.singleCarContainer}>
                
            </div>
        </>
    )
}