import { Link } from "react-router-dom";
import CardRenderComp from "../features/CardsRenderComp";

let HomePage = ()=>{
    return(
        <>
        <p>Home Page</p>
            <Link to ="/AddCard">
                <button >
                    Add Card
                </button>
            </Link>
            <CardRenderComp/>
        </>
    )
}

export default HomePage;