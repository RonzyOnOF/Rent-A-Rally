import { configureStore } from '@reduxjs/toolkit';

import carsReducer from '../features/cars/carsSlice';
import modalReducer from '../features/modal/modalSlice';

export default configureStore({
    reducer: {
        cars: carsReducer,
        modal: modalReducer
    }
})
