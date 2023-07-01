import styles from './BookingForm.module.css';

export const BookingForm = () => {

    const currentDate = new Date().toISOString().split("T")[0];


    return (
        <>
            <form id={styles.bookingForm}>
                <label htmlFor='start'>Trip Start:</label>
                <input type='date' id='start' name='tripStart' min={currentDate}></input>
                <label htmlFor='end'>Trip End:</label>
                <input type='date' id='start' name='tripEnd'></input>
            </form>
        </>
    )
}