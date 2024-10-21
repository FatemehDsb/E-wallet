

let CardComponent =({card})=>{

    return(
        <>
        
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
         
        </>
    )
}
export default CardComponent;