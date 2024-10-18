import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: "cards", 
    initialState : {
        cards :[],
        initialIdValue : 0,
        activeCardId : null,
    },
    reducers:{
        addNewCard:(state, action)=>{
            const newCard = { ...action.payload, id:state.initialIdValue}
            state.cards.push(newCard)
            state.initialIdValue++;

        },

        setActiveCard:(state, action)=>{
            state.activeCardId = action.payload;
        },
        
        SetDeleteCard : (state, action)=>{
            const cardIdToDelete = action.payload;
            state.cards = state.cards.filter ( card => card.id !==cardIdToDelete)

        }, 



    }
});

export default cardsSlice.reducer;
export const {addNewCard, setActiveCard, SetDeleteCard} = cardsSlice.actions;
