import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from './pages/AboutUs.jsx';
import Team from './pages/Team.jsx';
import ContactUs from './pages/ContactUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
