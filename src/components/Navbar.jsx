
import React from 'react';
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";


let Navbar =()=>{

    return (
        <>
        <div className={styles.navbar}>
            <h2>My E-WALLET</h2>
                <div className={styles.links}>
                    <Link to ="/"> HOME </Link>
                    <Link to ="/setting">Setting</Link>
                </div>
        </div>
        </>
    )
}
export default Navbar;