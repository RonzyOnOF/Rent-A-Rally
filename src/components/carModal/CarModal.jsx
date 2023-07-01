import styles from './CarModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../features/modal/modalSlice';
import { selectSingleCar } from '../../features/cars/carsSlice';
import { SingleCar } from '../../components/singleCar/SingleCar';
import { Cross } from '../../components/Cross/Cross';
import { BookingForm } from '../../components//bookingForm/BookingForm';
import bottomLeftSplash from '../../../public/images/bottomLeft.png'

export const CarModal = () => {

    const dispatch = useDispatch();
    const car = useSelector(selectSingleCar);

    const closeModal = () => {
        dispatch(toggleModal());
    }

    return (
        <>
            <div className={styles.modalContainer}>
                <header>
                    <h2 id={styles.title}>Book A Car</h2>
                    <Cross closeModal={closeModal} />
                </header>
                <img id={styles.carPicture} src={car.image} />
                <SingleCar />
                <BookingForm />
                <img id={styles.bottomSplash} src={bottomLeftSplash} />

            </div>
        </>
    )
}