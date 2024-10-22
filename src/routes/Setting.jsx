import Navbar from "../components/Navbar";

const Setting = ()=>{
    return(
        <>
        <Navbar/>
        <label>Select your theme</label>
        <select>
            <option>Theme</option>
            <option>Authum</option>
            <option>Dark</option>
            <option>Light</option>
        </select>
        </>
    )
}

export default Setting;