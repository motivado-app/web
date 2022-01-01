import React from "react";
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { 
  Home, 
  NotFound,
  Login
} from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        {/* Redirect if there is no path */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}