
import AddCardForm from "../features/AddCardForm";
import CardPreviewRender from "../features/CardPreviewRender";
import { useState } from "react";
import Navbar from "../components/Navbar";


let AddCardPage = ()=>{

// const [cardsArr, setCardsArr]= useState([]);

//saving inputVALUE TO LOCALsTATE
const [card, setCard ] = useState({

    cardIssuer : "",
    cardNumber : "",
    cardHolder : "",
    expirationDate:"",
    ccv:"",
})

    return(
        <>
        <Navbar/>
        <CardPreviewRender card={card}/>
        <h3>Add Cards</h3>
        <AddCardForm card={card} setCard={setCard}/>
        </>
    )


} 

export default AddCardPage;