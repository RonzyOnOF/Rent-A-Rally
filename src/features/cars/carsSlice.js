import { createSlice } from '@reduxjs/toolkit';

import { inventory } from '../../data/carInventory';


const allCars = createSlice({
    name: 'cars',
    initialState: {
        inventory: inventory,
        filteredInventory: []
    },
    reducers: {
        filterCars: (state, action) => {
            state.filteredInventory = state.inventory.filter(car => { return car.make.toLowerCase().includes(action.payload)});
        }
    }
})



export const selectCars = state => state.cars.inventory;
export const selectFilteredCars = state => state.cars.filteredInventory;
export const { filterCars } = allCars.actions;
export default allCars.reducer;