import { Link } from "react-router-dom";
import CardRenderComp from "../features/CardsRenderComp";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

let HomePage = ()=>{
    return(
        <>
        <Navbar/>
        <p>Home Page</p>
            <Link to ="/AddCard">
                <Button
                label="Add Card"/>
            </Link>
            <CardRenderComp/>
        </>
    )
}

export default HomePage;