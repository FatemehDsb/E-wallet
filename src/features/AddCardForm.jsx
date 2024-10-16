
import { useState } from "react";
import InputComponent from "../components/InputComponent";
let AddCardForm = ()=>{

//saving inputVALUE TO LOCALsTATE
const [card, setCard ] = useState({
    cardIssuer : "",
    cardNumber : "",
    cardHolder : "",
    expirationMonth:"",
    expirationYear:"",
    ccv:"",

})

const handleInputChange = (e)=>{
    const {name, value}= e.target
    setCard({...card, [name]: value})

}

const handleSavedCard  =() =>{

}

    return(
        <>
        <h2>AddCardFormComponent</h2>
      
            <InputComponent  
            type ="text" 
            placeholder="Card Issuer"
            name="cardIssuer"
            value={card.cardIssuer} 
            onChange={handleInputChange}
            />

            <InputComponent  
            type ="number" 
            placeholder="card Number"
            name="cardNumber"
            value={card.cardNumber} 
            onChange={handleInputChange}
            />

            <InputComponent  
            type ="text" 
            placeholder="cardHolder name"
            name="cardHolder"
            value={card.cardHolder} 
            onChange={handleInputChange}
            />

            <InputComponent  
            type ="number" 
            placeholder="Expiration Month"
            name="expirationMonth"
            value={card.expirationMonth} 
            onChange={handleInputChange}
            />

           <InputComponent  
            type ="number" 
            placeholder="Expiration Year"
            name="expirationYear"
            value={card.expirationYear} 
            onChange={handleInputChange}
            />


            <button onClick={handleSavedCard}>Save the card</button>
      
         </>
    )
}

export default AddCardForm;