import { Link } from "react-router-dom";

let HomePage = ()=>{
    return(
        <>
        <p>Home Page</p>
            <Link to ="/AddCard">
            <button >
                 Add Card
            </button>
        </Link>
        </>
    )
}

export default HomePage;