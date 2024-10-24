import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { setTheme } from "../redux/themeSlice";
import { useState } from "react";



const Setting = ()=>{
    const selectedTheme = useSelector((state)=>state.themereducer.themeValue)
    const dispatch=useDispatch();

    const [theme, setThemeState]= useState(selectedTheme)

    const handleChangeTheme =(e)=>{
        const newTheme= e.target.value;
        setThemeState(newTheme)
        dispatch(setTheme(newTheme))
    }
    
    const latestTheme = useSelector((state)=>state.themereducer.themeValue)
   console.log(latestTheme);

    return(
        <>
        <Navbar/>
        <label>Select your theme</label>
        <select value={theme} onChange={handleChangeTheme}>
            <option
            value=""
            >Theme</option>

            <option
            value="authumn"
            >Authum</option>

            <option
             value="dark"
             >Dark</option>

            <option 
            value="light"
            >
            Light</option>
        </select>
        </>
    )
}

export default Setting;