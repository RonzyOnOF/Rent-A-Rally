import styles from './CarModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../features/modal/modalSlice';
import { selectSingleCar } from '../../features/cars/carsSlice';
import { SingleCar } from '../../components/singleCar/SingleCar';
import { Cross } from '../../components/Cross/Cross';
import { BookingForm } from '../../components//bookingForm/BookingForm';
import { useState } from 'react';
import bottomLeftSplash from '../../../public/images/bottomLeft4.png'
import email from '../../../public/images/email.png';
export const CarModal = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const dispatch = useDispatch();
    const car = useSelector(selectSingleCar);

    const closeModal = () => {
        dispatch(toggleModal());
    }

    const submit = () => {
        setIsSubmitted(!isSubmitted);
    }

    return (
        <>
            {isSubmitted 

             ?  <div className={styles.modalContainerSubmitted}>
                    <div className={styles.modalConfirmationContainer}>
                        <img src={email} />
                        <div className={styles.confirmationContainer}>
                            <p>An email has been sent to confirm order</p>
                            <Cross closeModal={closeModal} />
                        </div>
                        <hr />
                    </div>
                </div>
             :  <div className={styles.modalContainer}>
                    <header>
                        <h2 id={styles.title}>Book A Car</h2>
                        <Cross closeModal={closeModal} />
                    </header>
                    <img id={styles.carPicture} src={car.image} />
                    <SingleCar />
                    <BookingForm submit={submit}/>
                    <img id={styles.bottomSplash} src={bottomLeftSplash} />
                </div>}
        </>
    )
}
