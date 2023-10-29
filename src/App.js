import React from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import About from './pages/about/about';
import RootLayout from './pages/RootLayout';
import './App.css';

const router = createHashRouter([{
  path: '/',
  element: <RootLayout/>,
  children: [{
    index: true,
    element: <Home />
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'portfolio',
    element: <Portfolio />
  },
  {
    path: 'contact',
    element: <Contact />
  }
  ]
}])

function App() {
  
  return <RouterProvider router={router}/>;
}

export default App;
