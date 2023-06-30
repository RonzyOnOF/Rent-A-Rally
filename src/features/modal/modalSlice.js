
import { createSlice } from '@reduxjs/toolkit';

const modal = createSlice({
    name: 'modal',
    initialState: false,
    reducers: {
        toggleModal: (state) => {
            return state  = !state;
        }
    }
})

export default modal.reducer;
export const selectModal = state => state.modal;
export const { toggleModal } = modal.actions;