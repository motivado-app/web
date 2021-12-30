import React from "react";
import { 
  BrowserRouter,
  Routes,
  Route,
  Navigate
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
        <Route path="/404" element={<NotFound />} />
        {/* Redirect if there is no path */}
        <Route path="/*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  )
}