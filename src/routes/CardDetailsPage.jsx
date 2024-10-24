import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import CardDetailsComp from "../features/CardDetailsComp";
import Navbar from "../components/Navbar";

let CardDetailsPage =()=>{
const {id} = useParams();
const numberId = parseInt(id, 10);





const selectedCard = useSelector ((state)=> 
    state.cardreducer.cards.find ((card)=> card.id ===numberId)
);

if (!selectedCard) {
   
    return(

        <>
        <p>Card not found!</p>
        <Navbar/>
        </>
    )
    
    
  };

    return(
        <>
        <Navbar/>
        {/* <h3>Card detail page{id}</h3> */}
        <CardDetailsComp  selectedCard = {selectedCard}/>
        </>
    )

}
export default CardDetailsPage;