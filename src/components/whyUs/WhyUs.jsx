import styles from './WhyUs.module.css';
import carTrio from '../../../public/images/carTrio.png';
import sideImage from '../../../public/images/background4.png';

export const WhyUs = () => {

    return (
        <>
            <article className={styles.whyUsContainer}>
                <img id={styles.sideImage} src={sideImage} />
                <h4>Why Choose Us</h4>
                <img src={carTrio} />
                <div className={styles.textContainer}>
                    <div className={styles.reasons}>
                        <h5>Wide Selection</h5>
                        <p>Variety of cars to pick for different adventures. Tackle on different landscapes, conditions, or even just driving experience with different cars</p>
                    </div>
                    <div className={styles.reasons}>
                        <h5>Free Cancellation</h5>
                        <p>Cancel up to 24 hours for a full refund hassle free with no fees!</p>
                    </div>
                    <div className={styles.reasons}>
                        <h5>Covered</h5>
                        <p>All cars are covered because we know life happens sometimes, so let us take care of that.</p>
                    </div>
                </div>
            </article>
        </>
    )
}