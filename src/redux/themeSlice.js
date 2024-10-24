import { createSlice } from "@reduxjs/toolkit"

const themeSlice =createSlice({
    name:"theme",
    initialState: {
        themeValue:"authumn"
    },
    reducers:{
        setTheme:(state, action)=>{
            state.themeValue = action.payload

        }
    }
})

export default themeSlice.reducer;
export const {setTheme}= themeSlice.actions