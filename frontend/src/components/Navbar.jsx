import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/images/logo-icon-white.png";


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
    <nav className="z-10 px-4 py-3 bg-fixed bg-custom-blue">
      {/* change need to be: bg-fixed -> fixed w-screen */}
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-4 w-15"/>
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
            <Link to="/" className='hover:text-gray-300 text-sm font-saira text-[16px]' style={{ color: isActive("/") ? "#EC8305" : "#ffffff" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className='hover:text-gray-300 text-sm font-saira text-[16px]' style={{ color: isActive("/about-us") ? "#EC8305" : "#ffffff" }}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/resource-bank" className='hover:text-gray-300 text-sm font-saira text-[16px]' style={{ color: isActive("/resource-bank") ? "#EC8305" : "#ffffff" }}>
              Resource Bank
            </Link>
          </li>
          <li>
            <Link to="/past-events" className='hover:text-gray-300 text-sm font-saira text-[16px]' style={{ color: isActive("/past-events") ? "#EC8305" : "#ffffff" }}>
              Past Events
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className='hover:text-gray-300 text-sm font-saira text-[16px]' style={{ color: isActive("/contact-us") ? "#EC8305" : "#ffffff" }}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/announcements" className={`text-${isActive("/announcements") ? "custom-orange" : "#0b201c"} hover:text-gray-300 text-sm text-[16px]`}>
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
