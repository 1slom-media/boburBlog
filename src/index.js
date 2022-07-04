import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './contexts/auth-context';
import App from './App';
import { FilterProvider } from './contexts/filter-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <FilterProvider>
      <App />
      </FilterProvider>
    </AuthProvider>
</BrowserRouter>
);

