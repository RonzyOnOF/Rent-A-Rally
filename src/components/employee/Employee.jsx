import styles from './Employee.module.css';
import { useState } from 'react';

export const Employee = ({ employee }) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false);


    const handleImageLoaded = () => {
        setIsImageLoaded(true);
    }

    return (
        <>
            <article className={styles.employeeContainer} >
                <img className={isImageLoaded ? styles.pfp : styles.pfpLoadingSkeleton} src={employee.pfp} onLoad={handleImageLoaded}/>
                <h3>{employee.name}</h3>
                <p>{employee.jobTitle}</p>
                <div id={styles.moreInfo}>
                    <p>{employee.moreInfo}</p>
                </div>
            </article>
        </>
    )
}