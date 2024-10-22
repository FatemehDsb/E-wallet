import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CardComponent from "./CardComponent";






let CardRenderComp =()=>{

const cardsArray = useSelector((state)=> state.cardreducer.cards)


 
return(
        <>
        <div className="cards-container">
            {cardsArray && cardsArray.length>0 ? (
            cardsArray.map((card)=>(
            
                <Link key={card.id}  to={`/carddetails/${card.id}`}>
                    <CardComponent card={card}/>
                   
                </Link>
                ))
        ): (<li>No card</li>)
        }
        </div>
        
                
       
        
        </>
    )

}

export default CardRenderComp