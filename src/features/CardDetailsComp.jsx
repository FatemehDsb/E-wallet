
import { useDispatch, useSelector } from "react-redux";
import Button from  "../components/Button";
import {setActiveCard, setDeactiveCard, SetDeleteCard , updateCard} from  "../redux/cardsSlice"
import { useNavigate } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import { useState } from "react";
import CardInput from "./CardInput";



let CardDetailsComp = ({selectedCard})=>{
    
    const dispatch = useDispatch();
    const navigate =  useNavigate();

    const activeCardId = useSelector((state)=> state.cardreducer.activeCardId)

    const [editedCard, setEditedCard] = useState(selectedCard)
    
    const handleSetActive = ()=>{
        if(selectedCard.id ===activeCardId){
            dispatch(setDeactiveCard(selectedCard.id));
        }else{

            dispatch(setActiveCard(selectedCard.id))
        }
    }

    const handleDeleteCard = ()=>{
        if(selectedCard.id === activeCardId){
            alert("Card is active and cannot be deleted!");
            return;
        }
        dispatch(SetDeleteCard(selectedCard.id));
        navigate('/')
    }
 
    const handleInputChange = (e)=>{

        const {name, value}= e.target
        console.log({name}, {value});
        
        console.log("edited card " ,selectedCard);

        setEditedCard({...editedCard, [name]: value})

    }
    
    const handleSave = ()=>{
        dispatch(updateCard({id:editedCard.id, cardData: editedCard}));
        
    }
return(
    <>
        <h1>card{selectedCard.id}</h1>
        <h2> {selectedCard.id === activeCardId ? "this card is active " : "not active"}
        </h2>


        <Button
        label=
        {selectedCard.id ===activeCardId ? "Deactivate Card" : "Activate Card"}
        onClick={()=>handleSetActive(selectedCard.id)}
        />

        <Button
        label="Delete Card"
        onClick={()=>handleDeleteCard(selectedCard.id)}
        />
        <Button
        label="save Card"
        onClick={()=>handleSave(selectedCard.id)}
        />

        {/* <InputComponent  
        type ="number" 
        placeholder="card Number"
        name="cardNumber"
        value={editedCard.cardNumber} 
        onChange={handleInputChange}
        /> */}

        <CardInput editedCard={editedCard} handleInputChange={handleInputChange}/>

        


    
    </>
)
}
export default CardDetailsComp;

