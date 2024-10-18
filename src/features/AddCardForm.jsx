
import { useState, useEffect} from "react";
import InputComponent from "../components/InputComponent";
import { useDispatch, useSelector } from "react-redux";
import {addNewCard} from "../redux/cardsSlice"

let AddCardForm = ({card, setCard})=>{

const [cardsArr, setCardsArr]= useState([]);
const dispath = useDispatch();


const handleInputChange = (e)=>{
    const {name, value}= e.target

    if (name === "cardHolder"){
        const nameContainsNumber = /\d/.test(value);
        if(nameContainsNumber){
            alert ("cardholder name cannot contain numbers")
            return;
        }
    }

    setCard({...card, [name]: value})
}
const cardsArrayFromState = useSelector((state)=>(state.cardreducer.cards))

// useEffect (()=>{
//     console.log("saved cards array in state", cardsArrayFromState);
// }, [cardsArrayFromState])


    const handleSavedCard  =() =>{

        const currentDate = new Date();
        const currentMonth = currentDate.getMonth()+1;
        const currentYear = currentDate.getFullYear();

       const[expYear , expMonth ] = card.expirationDate.split("-").map(Number)

        //cardNumber validation
        // if (card.cardNumber.length !==16){
        //     alert("wrong card number! ")
        //     return;
        // }
        //Date and month validation
        if( expYear<currentYear || (expYear===currentYear && expMonth<currentMonth)){
            alert("Your card is not valid");
            return;
        }
        //number of cards validation
        if (cardsArrayFromState.length >= 4 ){
            alert("You are not able to add more than 4 cards!")
            return;
        }

        
        setCardsArr([...cardsArr, card])
        dispath(addNewCard(card))
        // console.log("dispatched Cards:", card);
    }

    // const handleSetActive = (id)=>{
    //    dispath(setActiveCard(id))

    // }

    // const activeCardId = useSelector((state)=> state.cardreducer.activeCardId);
    
    // useEffect (()=>{
    //     console.log("active card Id", activeCardId);
    // }, [activeCardId])
    





    return(
        <>
        <h2>AddCardFormComponent</h2>
  

            <select name="cardIssuer"
             value={card.cardIssuer} 
            onChange={handleInputChange}>
                <option value="">-- Välj Kortutgivare --</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="American Express">American Express</option>
            </select>

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
            type ="month" 
            name="expirationDate"
            value={card.expirationYear} 
            onChange={handleInputChange}
            />

            {/* <input type="radio"
             name="activityStatus"
            value={card.id}
            onChange = {() => handleSetActive(card.id)}
            />
            <label>Activate card</label> */}

            


            <button onClick={handleSavedCard}>Save the card</button>
      
         </>
    )
}

export default AddCardForm;