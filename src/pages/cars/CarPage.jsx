
import styles from './CarPage.module.css';
import underline from '../../../public/images/underline3.png';
import { Cars } from '../../features/cars/Cars';

export const CarPage = () => {
    return (
        <>
            <div className={styles.carPageContainer}>
                <h2>Browse through our large collection of cars</h2>
                <Cars />
            </div>
        </>
    )
}