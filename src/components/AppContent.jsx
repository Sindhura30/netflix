import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Login } from './Login';
import { Browse } from './Browse';

// Main App component that uses Redux hooks
export const AppContent = () => {

  return (
    <BrowserRouter>
      <div className="text-3xl font-bold text-blue-500 bg-gradient-to-b from-black p-5">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
