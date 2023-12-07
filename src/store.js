import { configureStore } from "@reduxjs/toolkit";
import numberSliceReducer from "./slices/numberSlice.js"

const store = configureStore({
    reducer: {
        number: numberSliceReducer,
    },
});

export default store;