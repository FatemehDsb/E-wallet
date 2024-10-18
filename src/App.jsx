import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './routes/HomePage';
import AddCardPage from './routes/AddCardPage';
import CardDetailsPage from './routes/CardDetailsPage';

function App() {
  

  return (
  <>
  <p>Projektarbete - E-wallet</p>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path ="/AddCard" element={<AddCardPage/>}></Route>
    <Route path='/CardDetails/:id' element={<CardDetailsPage/>}></Route>
  </Routes>
  </>
  )
}

export default App
