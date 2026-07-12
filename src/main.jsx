import { Buffer } from "buffer";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home.jsx'; // or Home.jsx
import './index.css';
import { HelmetProvider } from "react-helmet-async";

window.Buffer = Buffer;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);