import styles from './CarModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../features/modal/modalSlice';
import { selectSingleCar } from '../../features/cars/carsSlice';
import { Car } from '../car/Car';

export const CarModal = () => {

    const dispatch = useDispatch();
    const car = useSelector(selectSingleCar);

    return (
        <>
            <div className={styles.modalContainer}>
                <h2>Scammer get scammed</h2>
                <button onClick={() => dispatch(toggleModal())}>Close</button>
                <Car car={car}/>
            </div>
        </>
    )
}