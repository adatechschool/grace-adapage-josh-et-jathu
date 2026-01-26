
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { Timeline } from './pages/Timeline';
import { Testimonial } from './pages/Testimonial';

const router = createBrowserRouter([
  {
  path: '/',
  element: <Home />,

},

{
  path: '/Features',
  element: <Features />,
},

{
  path: '/Timeline',
  element: <Timeline />
},

{
  path: '/Testimonial',
  element: <Testimonial />
}

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
