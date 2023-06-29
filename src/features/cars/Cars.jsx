
import { Filter } from '../../components/filter/Filter';
import { Car } from '../../components/car/Car';
import styles from './Cars.module.css';
import { selectCars, selectFilteredCars } from '../../features/cars/carsSlice';
import { useSelector } from 'react-redux';

export const Cars = () => {

    const allCars = useSelector(selectCars);
    const filteredCars = useSelector(selectFilteredCars);

    

    return (
        <>
            <Filter />
            <div className={styles.carsContainer}>
            {filteredCars.length === 0 ? allCars.map(car => {
                return (
                    <Car car={car} key={car.model} />
                )
            }) : filteredCars.map(car => {
                return (
                    <Car car={car} key={car.model} />
                )
            })}
            </div>
        </>
    )
}