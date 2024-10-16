import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './routes/HomePage';
import AddCard from './routes/AddCard';

function App() {
  

  return (
  <>
  <p>Projektarbete - E-wallet</p>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path ="/AddCard" element={<AddCard/>}></Route>
  </Routes>
  </>
  )
}

export default App
