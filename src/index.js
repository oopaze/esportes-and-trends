import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from 'styles/global';

import App from './App';
import { RouterContextProvider } from './hooks/use-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterContextProvider>
      <App />
      <GlobalStyles />
    </RouterContextProvider>
  </React.StrictMode>
);
