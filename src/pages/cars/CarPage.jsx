
import styles from './CarPage.module.css';
import { Cars } from '../../features/cars/Cars';
import { selectModal } from '../../features/modal/modalSlice';
import { useSelector } from 'react-redux';

import { CarModal } from '../../components/carModal/CarModal';


export const CarPage = () => {

    const modal = useSelector(selectModal);
    

    return (
        <>
            <div className={modal ? styles.carPageContainerModal : styles.carPageContainer}>
                <h2>Browse through our large collection of cars</h2>
                <Cars />
            </div>
            {modal && <CarModal />}
        </>
    )
}