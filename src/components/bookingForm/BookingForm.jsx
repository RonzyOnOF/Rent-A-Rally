import styles from './BookingForm.module.css';
import { selectSingleCar } from '../../features/cars/carsSlice';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

export const BookingForm = () => {

    const currentDate = new Date().toISOString().split("T")[0];
    const car = useSelector(selectSingleCar);
    const [price, setPrice] = useState(car.cost);
    const [startDate, setStartDate] = useState(currentDate);
    const [endDate, setEndDate] = useState('');
    const [day, setDay] = useState(0);

    const handleStartDate = (e) => {
        setStartDate(e.target.value);
    }   


    const handleEndDate = (e) => {
        setEndDate(e.target.value);
        const date1 = new Date(startDate);
        const date2 = new Date(e.target.value);
        const diffDate = date2 - date1;
        let diffDateDays = diffDate / (1000 * 3600 * 24);
        if (diffDateDays == 0) {
            diffDateDays = 1;
        }
        setDay(diffDateDays);
        const totalPrice = diffDateDays * car.cost;
        setPrice(totalPrice);
        
    }


    return (
        <>
            <form id={styles.bookingForm}>
                <label htmlFor='start'>Trip Start:</label>
                <input type='date' id='start' name='tripStart' value={startDate} min={currentDate} onChange={handleStartDate}></input>
                <label htmlFor='end'>Trip End:</label>
                <input type='date' id='start' name='tripEnd' value={endDate} min={currentDate}  onChange={handleEndDate}></input>
            </form>
            <div className={styles.carDetails}>
                <h4>{car.make}</h4>
                <p>{car.model}</p>
                <p>{car.transmission}</p>
                <p>{car.drivetrain}</p>
                <p>{car.year}</p>
            </div>
            <div className={styles.calculator}>
                <p>Estimated Price: ${price}</p>
                <button id={styles.submitBook} type='submit' onClick={() => {console.log('car reserved')}}>Book a car</button>

            </div>
        </>
    )
}