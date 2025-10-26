import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App.jsx";
import "./theme.css";

import { CartProvider } from "./context/CartContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { ModalProvider } from './context/ModalContext.jsx';
 
createRoot(document.getElementById("root")).render(
   
  <StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ModalProvider>
    </ThemeProvider>
  </StrictMode>
);