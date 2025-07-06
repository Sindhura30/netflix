import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Login } from './components/Login';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className='text-3xl font-bold text-blue-500 bg-gradient-to-b from-black p-5'>
        <Header />
        <Routes>
            <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
