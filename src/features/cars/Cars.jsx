
import { Filter } from '../../components/filter/Filter';
import { Car } from '../../components/car/Car';
import styles from './Cars.module.css';
import { selectCars, selectFilteredCars } from '../../features/cars/carsSlice';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

export const Cars = () => {

    const allCars = useSelector(selectCars);
    const filteredCars = useSelector(selectFilteredCars);
    

    return (
        <>
            
            <Filter />
            <motion.div 
                className={styles.carsContainer}
                initial={{opacity: 0, translateY: 50}} 
                animate={{opacity: 1, translateY: 0}}
                transition={{duration: 0.5}}
            >
            {filteredCars.length === 0 ? allCars.map(car => {
                return (
                    <Car car={car} key={car.model} />
                )
            }) : filteredCars.map(car => {
                return (
                    <Car car={car} key={car.model} />
                )
            })}
            </motion.div>
        </>
    )
}