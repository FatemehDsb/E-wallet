import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice";


const store = configureStore({
    reducer:{
        cardreducer:cardsSlice
    }
})
export default store;