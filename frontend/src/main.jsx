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
import { ClerkProvider } from '@clerk/clerk-react';

const { VITE_CLERK_PUBLISHABLE_KEY } = import.meta.env;
const PUBLISHABLE_KEY = VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

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
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
)
