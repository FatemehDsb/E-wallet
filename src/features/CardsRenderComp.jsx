import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CardComponent from "./CardComponent";
import { setDeleteInactiveCards } from "../redux/cardsSlice";

let CardRenderComp =()=>{

const cardsArray = useSelector((state)=> state.cardreducer.cards)
//get active card
const activeCardId = useSelector((state)=> state.cardreducer.activeCardId);
const activeCard = cardsArray.find((card)=> card.id===activeCardId)
const deactiveCardsArr = cardsArray.filter((card)=> card.id !== activeCardId)
 
return(
        <>
        <div className="cards-container">

            {activeCard && (
                <div className="active-card">
                    <Link key={activeCard.id} to={`/carddetails/${activeCard.id}`}>
                         <CardComponent card={activeCard}/>
                    </Link>
                </div>
            )}


            {deactiveCardsArr && deactiveCardsArr.length>0 ? (
            deactiveCardsArr.map((card)=>(
                <div key={card.id} className="deactive-cards">
                        <Link key={card.id}  to={`/carddetails/${card.id}`}>
                         <CardComponent card={card}/>
                    </Link>
                </div>
                    ))
                ): (<li>No card</li>)
            }
            </div>
        
                
       
        
        </>
    )

}

export default CardRenderComp