
import { useDispatch, useSelector } from "react-redux";
import Button from  "../components/Button";
import {setActiveCard, setDeactiveCard, SetDeleteCard , updateCard} from  "../redux/cardsSlice"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CardInput from "./CardInput";
import CardPreviewRender from "./CardPreviewRender";



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
        if(selectedCard.id === activeCardId){
            alert("Card is active and cannot be changed!");
            return;
        }

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
        {/* <h1>card{selectedCard.id}</h1> */}
        <h2> {selectedCard.id === activeCardId ? "Active Card" : "Card is not active"}
        </h2>

        <CardPreviewRender card={editedCard}/>


<div className="btn-div">

        <Button
        label=
        {selectedCard.id ===activeCardId ? "Deactivate Card" : "Activate Card"}
        onClick={()=>handleSetActive(selectedCard.id)}
        />

        <Button 
        className="delete-btn"
        label="Delete Card"
        onClick={()=>handleDeleteCard(selectedCard.id)}
        />
        <Button
        label="Update Card" 
        className="update-btn"
        onClick={()=>handleSave(selectedCard.id)}
        />
    </div>

        <CardInput editedCard={editedCard} handleInputChange={handleInputChange}/>
    
    </>
)
}
export default CardDetailsComp;

