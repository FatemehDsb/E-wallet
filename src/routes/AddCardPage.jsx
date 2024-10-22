
import { Link } from "react-router-dom";
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
        <h1>Add Card Page</h1>
        <Navbar/>
        <CardPreviewRender card={card}/>
        <AddCardForm card={card} setCard={setCard}/>
        </>
    )


} 

export default AddCardPage;