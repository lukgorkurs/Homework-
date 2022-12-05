import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LoginPage from './components/pages/LoginPage/LoginPage';
import MoviesList from './components/molecules/MoviesList/MoviesList';



const routes = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/MoviesList',
    element: <MoviesList />
  }
])

// {
//   path: '/add',
//   element: <AddMessagePage />
// },
// {
//   path: '/about',
//   element: <AboutPage />
// },
// {
//   path: '/edit/:messageId',
//   element: <EditPage />
// },
// {
//   path: '/login',
//   element: <LoginPage />
// },
// {
//   path: '/register',
//   element: <RegisterPage />
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);


