import { createSlice } from '@reduxjs/toolkit';

import { inventory } from '../../data/carInventory';


const allCars = createSlice({
    name: 'cars',
    initialState: inventory
})



export const selectCars = state => state.cars;
export default allCars.reducer;