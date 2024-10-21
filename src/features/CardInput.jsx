import InputComponent from "../components/InputComponent";
const CardInput = ({editedCard}, {handleInputChange} )=>{


    return(
        <>

                <div   className="card-container">
                        <div className="first-line">
                            <p className="card-Issuer"></p>
                            <select name="cardIssuer"
                            value={editedCard.cardIssuer} 
                             onChange={handleInputChange}>
                                <option value="">-- Välj Kortutgivare --</option>
                                <option value="Visa">Visa</option>
                                <option value="Mastercard">Mastercard</option>
                                <option value="American Express">American Express</option>
                            </select>
                        </div>

                        <div className="second-line">
                            <InputComponent  
                            type ="number" 
                            placeholder="card Number"
                            name="cardNumber"
                            value={editedCard.cardNumber} 
                            onChange={handleInputChange}
                            />
                        </div>

                        <div className="third-line">
                            <div className="card-holder-div">
                                <p className="card-holder-title">card holder name</p>
                                <InputComponent  
                                type ="text" 
                                placeholder="cardHolder name"
                                name="cardHolder"
                                value={editedCard.cardHolder} 
                                onChange={handleInputChange}
                                />
                            </div>

                            <div>
                            <InputComponent  
                                type ="month" 
                                name="expirationDate"
                                value={editedCard.expirationYear} 
                                onChange={handleInputChange}
                                />
                            </div>
                        </div>
             </div>
        
        </>
    )
}

export default CardInput;