
import styles from './CarPage.module.css';
import { Cars } from '../../features/cars/Cars';
import { selectModal } from '../../features/modal/modalSlice';
import { setInventory } from '../../features/cars/carsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { inventory } from '../../data/carInventory';
import { useEffect } from 'react';

import { SkeletonTheme } from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";


import { CarModal } from '../../components/carModal/CarModal';


export const CarPage = () => {

    const dispatch = useDispatch();

    const modal = useSelector(selectModal);

    useEffect(() => {
        dispatch(setInventory(inventory));
    }, [])
    

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