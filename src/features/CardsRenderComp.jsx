import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


useSelector

let CardRenderComp =()=>{

const cardsArray = useSelector((state)=> state.cardreducer.cards)


useEffect (()=>{
    console.log("saved card",cardsArray);
}, [cardsArray])
 
return(
        <>
        <div className="cards-container">
            {cardsArray && cardsArray.length>0 ? (
            cardsArray.map((card)=>(
            
                <Link key={card.id}  to={`/carddetails/${card.id}`}>
                    <div   className="card-container">
                        <div className="first-line">
                            <p className="card-Issuer">
                            {card.cardIssuer}
                            </p>
                        </div>
                        <div className="second-line">
                            <p className="card-number">
                                {card.cardNumber}
                            </p>
                        </div>
                        <div className="third-line">
                            <div className="card-holder-div">
                                <p className="card-holder-title">card holder name</p>
                                <p>{card.cardHolder} </p>
                            </div>

                            <div>
                                <p>Valid until</p>
                                <p>{card.expirationDate} </p>
                            </div>
                        </div>
                    </div>
                    
                </Link>
                ))
        ): (<li>No card</li>)
        }
        </div>
        
                
       
        
        </>
    )

}

export default CardRenderComp