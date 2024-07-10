import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/home/App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Projects from './pages/Projects/ProjectsPage.jsx'
// import Music from './pages/music/Music.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    children:[
      {path:'/', element: <App/> },
      {path:'/Projects', element: <Projects/> },
      // {path:'/Music', element: <Music/> }


    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
