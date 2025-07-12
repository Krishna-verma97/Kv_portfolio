// ✅ This is CORRECT — keep this one only!
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home.jsx'; // or Home.jsx
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Home /> {/* ✅ Don't wrap this again inside App.jsx! */}
    </BrowserRouter>
  </React.StrictMode>
);
