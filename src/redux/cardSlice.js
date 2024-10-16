import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "card", 
    initialState : {
        cards :[],
    },
    reducers:{
        addNewCard:(state, action)=>{
            state.cards.push(action.payload)

        },

        activateCard : (state, action)=>{

        },
        
        deleteCard : (state, action)=>{

        }, 



    }
});

export default cardSlice.reducer;
export const {addCard} = cardSlice.actions;
