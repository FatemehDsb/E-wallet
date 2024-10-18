
import { Link } from "react-router-dom";
import AddCardForm from "../features/AddCardForm";
import CardPreviewRender from "../features/CardPreviewRender";
import { useState } from "react";


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
        <Link to ="/"> HOME </Link>
        <CardPreviewRender card={card}/>
        <AddCardForm card={card} setCard={setCard}/>
        </>
    )


} 

export default AddCardPage;