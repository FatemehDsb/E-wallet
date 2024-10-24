import { Link } from "react-router-dom";
import CardRenderComp from "../features/CardsRenderComp";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import {SetDeleteCard, setDeleteInactiveCards} from "../redux/cardsSlice.js"



let HomePage = ()=>{
    const dispatch = useDispatch();
    const cardsArr = useSelector((state)=>state.cardreducer.cards);
   
    const activeCardId = useSelector((state)=>state.cardreducer.activeCardId)
    
    const inactiveCardsArr = cardsArr.filter((card)=> card.id!==activeCardId);

    const inactiveCardIds = inactiveCardsArr.map((card) => card.id)|| [];
    console.log(inactiveCardIds);

    const handleDeleteInactiveCards=()=>{
        dispatch(setDeleteInactiveCards(inactiveCardIds))
    }
    
    return(
        <>
        <Navbar/>
        {/* <div className="title">
        <p>Home Page</p>
        </div> */}
            <Link to ="/AddCard">
                <Button 
                label="Add Card"/>
            </Link>
            <CardRenderComp/>
            <Button 
            onClick={handleDeleteInactiveCards}
            label="Delete inactive cards"/>
        </>
    )
}

export default HomePage;