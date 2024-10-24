import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice";
import themeSlice from "./themeSlice";


const store = configureStore({
    reducer:{
        cardreducer:cardsSlice,
        themereducer:themeSlice
    }
})
export default store;