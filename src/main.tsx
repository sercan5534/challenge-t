import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import "./assets/main.css";
import { MainProvider } from './context/mainContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <MainProvider>
        <App />
    </MainProvider>
  </StrictMode>
);
