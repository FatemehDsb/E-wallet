import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './routes/HomePage';
import AddCardPage from './routes/AddCardPage';
import CardDetailsPage from './routes/CardDetailsPage';
import Setting from './routes/Setting';

function App() {
  

  return (
  <>
 
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path ="/AddCard" element={<AddCardPage/>}></Route>
    <Route path='/CardDetails/:id' element={<CardDetailsPage/>}></Route>
    <Route path="/Setting" element={<Setting/>}></Route>
  </Routes>
  </>
  )
}

export default App
