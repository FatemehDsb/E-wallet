import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './routes/HomePage';
import AddCardPage from './routes/AddCardPage';
import CardDetailsPage from './routes/CardDetailsPage';
import Setting from './routes/Setting';
import { useSelector } from 'react-redux';



function App() {
  
  const selectedTheme = useSelector((state)=> state.themereducer.themeValue)

  console.log(selectedTheme);
  

  return (
  <>
 <div className={`app-container ${selectedTheme}`}> 
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path ="/AddCard" element={<AddCardPage/>}></Route>
    <Route path='/CardDetails/:id' element={<CardDetailsPage/>}></Route>
    <Route path="/Setting" element={<Setting/>}></Route>
  </Routes>
 </div>
  
  </>
  )
}

export default App
