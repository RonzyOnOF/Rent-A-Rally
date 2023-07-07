import styles from './Steps.module.css';
import stepIcon from '../../images/firstStep.png';
import step2 from '../../images/step2icon.png';
import step3 from '../../images/step3Icon.png';

export const Steps = () => {
    return (
        <>
            <article className={styles.shortDescription}>
                <h3>Rent a car in 3 steps</h3>
                <div className={styles.stepsContainer} >
                    <div className={styles.step}>
                        <img src={stepIcon} />
                        <h4>Choose Car</h4>
                        <p>Select from a wide selection of different cars tailored to your needs</p>
                    </div>
                    <div className={styles.step}>
                        <img src={step2} />
                        <h4>Book</h4>
                        <p>Book online and cancel for free up to 24 hours before your trip</p>
                    </div>
                    <div className={styles.step}>
                        <img src={step3} />
                        <h4>Road Time</h4>
                        <p>Have the car delivered to you or pick it up from us</p>
                    </div>
                </div>
            </article>
        </>
    )
}