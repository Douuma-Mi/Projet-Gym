import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cards from './pages/Cards'
import SingUp from './pages/SingUp'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SingUp" element={<SingUp/>} />
      </Routes>
    </div>
  );
};
export default App
