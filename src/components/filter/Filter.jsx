import styles from './Filter.module.css';
import { useState } from 'react';
import { filterCars, resetFilter } from '../../features/cars/carsSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {

    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(filterCars(query));
    }

    const handleReset = (e) => {
        dispatch(resetFilter());
    }

    return (
        <>
            <div className={styles.formContainer} >
                <form onSubmit={handleSubmit}>
                    <select name='make' id={styles.make} onChange={handleChange} value={query}>
                        <option>Toyota</option>
                        <option>Honda</option>
                        <option>Subaru</option>
                        <option>BMW</option>
                        <option>Nissan</option>
                        <option>Mazda</option>
                        <option>Tesla</option>
                        <option>Porsche</option>
                        <option>Acura</option>
                        <option>Ford</option>
                    </select>
                    <button className={styles.submit} type='submit' onClick={handleSubmit}>Apply Filter</button>
                    <button className={styles.submit} type='reset' onClick={handleReset}>Reset</button>
                </form>
            </div>
        </>
    )
}