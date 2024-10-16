import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";


const store = configureStore({
    reducer:{
        cardreducer:cardSlice
    }
})
export default store;