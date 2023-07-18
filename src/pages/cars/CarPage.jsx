
import styles from './CarPage.module.css';
import { Cars } from '../../features/cars/Cars';
import { selectModal } from '../../features/modal/modalSlice';
import { useSelector } from 'react-redux';
import { SkeletonTheme } from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";


import { CarModal } from '../../components/carModal/CarModal';


export const CarPage = () => {

    const modal = useSelector(selectModal);
    

    return (
        <>
            <SkeletonTheme baseColor='#CDCDCD' highlightColor='#E3E3E3'>
                <div className={modal ? styles.carPageContainerModal : styles.carPageContainer}>
                    <h2>Browse through our large collection of cars</h2>
                    <Cars />
                </div>
                {modal && <CarModal />}
            </SkeletonTheme>
        </>
    )
}