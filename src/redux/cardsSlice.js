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

        setDeactiveCard : (state, action)=>{
            state.activeCardId = null;

        },
        
        SetDeleteCard : (state, action)=>{
         
            const cardIdToDelete = action.payload;
            state.cards = state.cards.filter ( card => card.id !==cardIdToDelete)
        }, 

        setDeleteInactiveCards:(state, action)=>{
            const cardIdsToDelete = action.payload;
            state.cards=state.cards.filter(card=>!cardIdsToDelete.includes(card.id))
        },

        updateCard : (state, action) =>{
            const {id, cardData}= action.payload;
            const index = state.cards.findIndex((card)=> card.id ===id);
            if ( index!== -1){
                state.cards[index]= {...state.cards[index], ...cardData}
            }
        }



    }
});

export default cardsSlice.reducer;
export const {addNewCard,updateCard, setActiveCard, setDeactiveCard, SetDeleteCard, setDeleteInactiveCards} = cardsSlice.actions;
