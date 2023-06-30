import { createSlice } from '@reduxjs/toolkit';

import { inventory } from '../../data/carInventory';


const allCars = createSlice({
    name: 'cars',
    initialState: {
        inventory: inventory,
        filteredInventory: [],
        singleCar: {}
    },
    reducers: {
        filterCars: (state, action) => {
            state.filteredInventory = state.inventory.filter(car => car.make.toLowerCase().includes(action.payload.toLowerCase()));
        },
        resetFilter: (state) => {
            state.filteredInventory = [];
        },
        setSingleCar: (state, action) => {
            state.singleCar = action.payload;
        }
        
    }
})



export const selectCars = state => state.cars.inventory;
export const selectFilteredCars = state => state.cars.filteredInventory;
export const selectSingleCar = state => state.cars.singleCar;
export const { filterCars } = allCars.actions;
export const { resetFilter } = allCars.actions;
export const { setSingleCar } = allCars.actions;
export default allCars.reducer;