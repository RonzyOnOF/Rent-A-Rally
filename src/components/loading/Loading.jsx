import styles from './Loading.module.css';
import Skeleton from 'react-loading-skeleton';
import { useState, useEffect } from 'react';



export const Loading = () => {

    const [isLoading, setIsLoading] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setIsLoading('ni');
        }, 2000)
    })


    return (
        <>
            <div className={styles.loadContainer}>
                <p>{isLoading || <Skeleton/>}</p>
            </div>
        </>
    )
}