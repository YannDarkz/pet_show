import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "./components/cadastro/cadastro"
import HomePage from './pages/home/home.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import UserProfile from './pages/userProfile/userProfile.tsx';

function App() {

  return (
    <Router>
      <ToastContainer></ToastContainer>

      <Routes>
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>

    </Router>
  )
}

export default App
