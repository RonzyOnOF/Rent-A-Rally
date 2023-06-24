import styles from './Steps.module.css';
import stepIcon from '../../../public/images/firstStep.png';
export const Steps = () => {
    return (
        <>
            <article className={styles.shortDescription}>
                <h3>Rent a car in 3 steps</h3>
                <div className={styles.stepsContainer} >
                    <div className={styles.step}>
                        <img src={stepIcon} />
                        <h4>Choose Car</h4>
                        <p>Select from a wide selection of different use case cars</p>
                    </div>
                    <div className={styles.step}>
                        <img src={stepIcon} />
                        <h4>Choose Car</h4>
                        <p>Select from a wide selection of different use case cars</p>
                    </div>
                    <div className={styles.step}>
                        <img src={stepIcon} />
                        <h4>Choose Car</h4>
                        <p>Select from a wide selection of different use case cars</p>
                    </div>
                </div>
            </article>
        </>
    )
}