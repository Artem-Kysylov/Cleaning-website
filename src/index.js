import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutPage from './pages/about/AboutPage';
import OurServicesPage from './pages/our services/OurServicesPage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/our services' element={<OurServicesPage/>}/>
    </Routes>
  </BrowserRouter>
);

