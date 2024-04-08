import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './index.css';

import App from './app/App';
import Teste from './pages/Pagina2'
import Cards from './pages/Cards/Cards';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: '/teste',
    element: <Teste/>,
  },
  {
    path: '/cards',
    element: <Cards/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);