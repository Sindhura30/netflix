import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Login } from './Login';
import { Browse } from './Browse';

// Main App component that uses Redux hooks
export const AppContent = () => {

  return (
    <BrowserRouter>
      <div className="bg-gradient-to-b from-black min-h-screen flex flex-col items-center px-2 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-5 max-w-7xl mx-auto w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
