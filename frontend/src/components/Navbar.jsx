import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/images/logo.png";


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
    <nav className="bg-custom-blue py-3 px-4 bg-fixed z-10">
      {/* change need to be: bg-fixed -> fixed w-screen */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-17 mr-4"/>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}  className="mobile-menu-button focus:outline-none"  >
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"/>
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-20 md:items-center`}
        >
          <li>
            <Link
              to="/"
              className={`text-${
                isActive("/") ? "custom-green" : "#0b201c"
              } hover:text-gray-300 text-sm font-saira`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className={`text-${
                isActive("/about-us") ? "custom-green" : "#0b201c"
              } hover:text-gray-300 text-sm font-saira`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/resource-bank"
              className={`text-${
                isActive("/resource-bank") ? "custom-green" : "#0b201c"
              } hover:text-gray-300 text-sm font-saira`}
            >
              Resource Bank
            </Link>
          </li>
          <li>
            <Link
              to="/past-events"
              className={`text-${
                isActive("/past-events") ? "custom-green" : "#0b201c"
              } hover:text-gray-300 text-sm font-saira`}
            >
              Past Events
            </Link>
          </li>
          <li>
            <Link
              to="/announcements"
              className={`text-${
                isActive("/contact-us") ? "custom-green" : "#0b201c"
              } hover:text-gray-300 text-sm`}
            >
              Announcements
            </Link>
          </li>
        </ul>

        {/* Sign in and Sign up buttons */}
        {/* <SignedIn>
          <SignedOutContent />
        </SignedIn>

        <SignedOut>
          <SignedInContent />
        </SignedOut> */}
        
      </div>
    </nav>
  )
}
