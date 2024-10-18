import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CardDetailsComp from "../features/CardDetailsComp";


let CardDetailsPage =()=>{
const {id} = useParams();
const numberId = parseInt(id, 10);



const card = useSelector ((state)=> 
    state.cardreducer.cards.find ((card)=> card.id ===numberId)
);

if (!card) {
    return <p>Card not found!</p>;
  };

    return(
        <>
        <Link to ="/"> HOME </Link>
        <h3>Card detail page{id}</h3>
        <CardDetailsComp  card = {card}/>
        </>
    )

}
export default CardDetailsPage;