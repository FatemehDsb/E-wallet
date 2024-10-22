

let CardComponent =({card})=>{

    const backgroundClasses ={
        SEB: "seb-background",
        Nordea: "nordea-background",
        Swedbank: "swedbank-background"
    }

    const cardBackgroundClass = backgroundClasses[card.cardIssuer] || "default-background";


    return(
        <>
        
         <div   className={`card-container ${cardBackgroundClass}`}>
                        <div   className="first-line">
                          <img 
                            className="card-logo" width="80px"
                            alt={`${card.cardIssuer} logo`}
                        
                            src={
                                card.cardIssuer === "SEB"
                                 ? "/img/seb.png"
                                  : card.cardIssuer === "Nordea"
                                  ? "/img/nordea.png"
                                  : card.cardIssuer === "Swedbank"
                                  ? "/img/swedbank.png"
                                  : "/img/default.png" 
                              }
                            />

                        </div>

                        <div className="second-line">
                         <p className="card-number">{card.cardNumber}</p>
                        </div>

                        <div className="third-line">
                            <div className="card-holder-div">
                                <p className="card-holder-title">{card.cardHolder}</p>
                            </div>

                            <div>
                                <p>Valid until</p>
                                <p>{card.expirationDate}</p>
                            </div>
                        </div>

                        <div className="last-line">
                            <p>CCV:{card.ccv}</p>
                        </div>
             </div>
        </>
    )
}
export default CardComponent;