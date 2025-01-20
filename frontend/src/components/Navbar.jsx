import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser, UserButton, SignedIn, SignedOut } from '@clerk/clerk-react';
import logo from "../assets/images/logo-icon-white.png";

// Define SignedOutContent and SignedInContent components
function SignedInContent(){
  return(
    <>
      <div className="flex items-center space-x-6">
      <Link
        to="/login"
        className="hidden text-m md:block text-custom-white hover:text-custom-black"
        style={{ fontFamily: 'Saira' }}
      >
        Sign in
      </Link>
      <Link
        to="/register"
        className="px-3 py-2 text-white text-m rounded-xl hover:text-custom-black bg-custom-orange"
        style={{ fontFamily: 'Saira' }}
      >
        Sign up
      </Link>
      </div>
    </>
  )
}

function SignedOutContent(){
  const UserType = useUser().user?.unsafeMetadata.Type;
  let UserLink;
  if (UserType == "Volunteer"){
    UserLink = "/Volunteer/Overview"
  }else if (UserType == "Organization"){
    UserLink = "/Organization/Overview"
  }else if (UserType == "School"){
    UserLink = "/School/Overview"
  }
  return(
    <div className="flex items-center space-x-3">
      <Link
        to={UserLink}
        className="px-3 py-2 mr-5 text-sm text-white rounded bg-custom-orange hover:bg-white hover:text-custom-orange hover:border border-custom-orange"
        style={{ fontFamily: "Saira" }}
      >
        Go To Page
      </Link>
      <UserButton
        signInUrl={"/Sign-In"}
        afterSignOutUrl= {"/"}/>   
    </div>
  )
}


export default function Navbar() {
  const location = useLocation(); // Get the current location
  const [isOpen, setIsOpen] = useState(false);

  // Function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-10 w-screen px-4 py-3 bg-fixed bg-custom-blue">
      {/* change need to be: bg-fixed -> fixed w-screen */}
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="mr-4 h-7 w-9"/>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}  className="mobile-menu-button focus:outline-none"  >
            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"/>
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <ul className={`${isOpen ? 'block' : 'hidden'} md:flex md:space-x-20 md:items-center font-semibold text-white rounded-lg`}>
          <li>
            <Link to="/" className={`text-${isActive("/") ? "custom-orange" : "#0b201c"} hover:text-gray-300 text-sm text-[16px]`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className={`text-${isActive("/about-us") ? "custom-orange" : "#0b201c"} hover:text-gray-300 text-sm text-[16px]`}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/resource-bank" className={`text-${isActive("/resource-bank") ? "custom-orange" : "#0b201c"} hover:text-gray-300 text-sm text-[16px]`}>
              Resource Bank
            </Link>
          </li>
          <li>
            <Link to="/past-events" className={`text-${isActive("/past-events") ? "custom-orange" : "#0b201c"} hover:text-gray-300 text-sm text-[16px]`}>
              Past Events
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className={`text-${isActive("/contact-us") ? "custom-orange" : "#0b201c"} hover:text-gray-300 text-sm text-[16px]`}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/announcements" className={`text-${isActive("/announcements") ? "custom-orange" : "#0b201c"} hover:text-gray-300 text-sm text-[16px]`}>
              Announcements
            </Link>
          </li>
        </ul>

        <SignedIn>
          <SignedOutContent />
        </SignedIn>

        <SignedOut>
          <SignedInContent />
        </SignedOut>
        
      </div>
    </nav>
  )
}
