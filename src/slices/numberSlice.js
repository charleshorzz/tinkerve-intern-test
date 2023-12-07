import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    servingNumber: '1234',
    lastServingNumber: '6789',
    counter: {
        availability: 'green',
        number: ''
    },
};

const numberSlice = createSlice({
    name: "number",
    initialState,
    reducers: {
        updateServingNumber: (state, action) => {
            state.servingNumber = action.payload
        },
        updateLastServingNumber: (state,action) => {
            state.lastServingNumber = action.payload
        },
        updateCounter: (state, action) => {
            state.counter = action.payload
        }
    },
});

export const { updateServingNumber, updateLastServingNumber, updateCounter } = numberSlice.actions;

export default numberSlice.reducer;