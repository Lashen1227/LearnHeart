import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react';

// Landing Pages
import AboutUs from './pages/AboutUs.jsx';
import Team from './pages/Team.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Loading from './pages/authorizationPages/Loading.jsx';
import CommunityPage from './pages/CommunityPage.jsx';
import CreatePost from './components/communityForm/CreatePost.jsx';
import EditPost from './components/communityForm/EditPost.jsx';
import SinglePost from './components/communityForm/SinglePost.jsx';
import PastEventsPage from './pages/PastEventsPage.jsx';

// Authorization Pages
import Login from './pages/authorizationPages/Login.jsx';
import SignUP from './components/authorization/ProfSelect.jsx';
import SclSignUP from './pages/authorizationPages/SclSignUP.jsx';
import OrgSignUP from './pages/authorizationPages/OrgSignUP.jsx';
import VolSignUP from './pages/authorizationPages/VolSignUP.jsx';
import OrgOwnerCreate from './components/authorization/OrgOwner-Create.jsx';

// Organization Pages
import OrgDetForm from "./components/authorization/OrgDetForm.jsx";
import OrgDashboard from './pages/userPages/OrgDashboard.jsx';

// School Pages
import SclDetForm from "./components/authorization/SclDetForm.jsx";
import SclDashboard from './pages/userPages/SclDashboard.jsx';

// Volunteer Pages
import VolDetForm from "./components/authorization/VolDetForm.jsx";
import VolDashboard from './pages/userPages/VolDashboard.jsx';

// Resource Bank Pages
import ResourceBank from './pages/resourceBankPages/ResourceBank.jsx';
import AddResource from './pages/resourceBankPages/AddResource.jsx';

const { VITE_CLERK_PUBLISHABLE_KEY } = import.meta.env;
const PUBLISHABLE_KEY = VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  { path: "https://learnheart.onrender.com/", element: <App />, },
  { path: "https://learnheart.onrender.com/about-us", element: <AboutUs />, },
  { path: "https://learnheart.onrender.com/team", element: <Team />, },
  { path: "https://learnheart.onrender.com/contact-us", element: <ContactUs />, },
  { path: "https://learnheart.onrender.com/posts", element: <CommunityPage />, },
  { path: "https://learnheart.onrender.com/posts/create", element: <CreatePost />, },
  { path: "https://learnheart.onrender.com/post/edit/:id", element: <EditPost />, },
  { path: "https://learnheart.onrender.com/post/:id", element: <SinglePost />, },
  { path: "https://learnheart.onrender.com/next", element: <Loading />, },
  { path: "https://learnheart.onrender.com/sign-in", element: <Login />, },
  { path: "https://learnheart.onrender.com/sign-up", element: <SignUP />, },
  { path: "https://learnheart.onrender.com/school/sign-up", element: <SclSignUP />, },
  { path: "https://learnheart.onrender.com/organization/sign-up", element: <OrgSignUP />, },
  { path: "https://learnheart.onrender.com/volunteer/sign-up", element: <VolSignUP />, },
  { path: "https://learnheart.onrender.com/volunteer/sign-in", element: <Login />, },
  { path: "https://learnheart.onrender.com/organization/sign-in", element: <Login />, },
  { path: "https://learnheart.onrender.com/school/sign-in", element: <Login />, },
  { path: "https://learnheart.onrender.com/organization/owner-create", element: <OrgOwnerCreate />, },
  { path: "https://learnheart.onrender.com/organization/details", element: <OrgDetForm />, },
  { path: "https://learnheart.onrender.com/organization/overview", element: <OrgDashboard />, },
  { path: "https://learnheart.onrender.com/school/details", element: <SclDetForm />, },
  { path: "https://learnheart.onrender.com/school/overview", element: <SclDashboard />, },
  { path: "https://learnheart.onrender.com/volunteer/details", element: <VolDetForm />, },
  { path: "https://learnheart.onrender.com/volunteer/overview", element: <VolDashboard />, },
  { path: "https://learnheart.onrender.com/resource-bank", element: <ResourceBank />, },
  { path: "https://learnheart.onrender.com/resource-bank/add", element: <AddResource />, },
  { path: "https://learnheart.onrender.com/past-events", element: <PastEventsPage />, },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
)
