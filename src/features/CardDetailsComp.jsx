
import { useDispatch, useSelector } from "react-redux";
import Button from  "../components/Button";
import {setActiveCard, SetDeleteCard , addNewCard} from  "../redux/cardsSlice"
import { useNavigate } from "react-router-dom";
import InputComponent from "../components/InputComponent";


let CardDetailsComp = ({card})=>{
    const dispatch = useDispatch();
    const navigate =  useNavigate();

    const handleSetActive = (id)=>{
        dispatch(setActiveCard(id))
    }

    const activeCardId = useSelector((state) => state.cardreducer.activeCardId)
    console.log(activeCardId);

    const handleDeleteCard = (id)=>{
        if(id === activeCardId){
            alert("Card is active and cannot be deleted!");
            return;
        }
        dispatch(SetDeleteCard(id));
        navigate('/')
    }

    const handleInputChange = (e)=>{
        const {name, value}= e.target
    
        if (name === "cardHolder"){
            const nameContainsNumber = /\d/.test(value);
            if(nameContainsNumber){
                alert ("cardholder name cannot contain numbers")
                return;
            }

            dispatch(addNewCard(card.name))
        }


   
}
return(
    <>
        <h1>card{card.id}</h1>
        <h2> {card.id === activeCardId ? "this card is active " : "not active"}
        </h2>

        <Button
        label="Activate Card"
        onClick={()=>handleSetActive(card.id)}
        />

        <Button
        label="Delete Card"
        onClick={()=>handleDeleteCard(card.id)}
        />

        <InputComponent  
        type ="number" 
        placeholder="card Number"
        name="cardNumber"
        value={card.cardNumber} 
        onChange={handleInputChange}
        />


    
    </>
)
}
export default CardDetailsComp;

