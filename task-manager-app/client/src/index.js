import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Profile from './pages/Profile';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Root from './Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/profile',
    element: <Profile />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root>
      <RouterProvider router={router} />
    </Root>
  </React.StrictMode>
);
