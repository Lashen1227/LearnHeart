import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { BsGlobe } from "react-icons/bs";

export default function Footer() {
    return (
      <footer className="text-center text-white bg-custom-blue lg:text-left">
        <div className="flex items-center justify-center p-6 border-b-2 border-neutral-500 lg:justify-between">
          <div className="hidden mr-12 lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Social network icons container --> */}
          <div className="flex justify-center">
            <a className="mr-6 text-white"><Link to={'/'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg></Link>
            </a>
            <a className="mr-6 text-white"><Link to={'/'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg></Link>
            </a>
            <a href='https://youtube.com/@learnheart-codenova?si=6pH7BibgdS-cXC6h' target='_blank' rel='noreferrer' className="mr-6 text-white hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-5" fill="currentColor" viewBox="0 0 48 48">
                <path d="M 23.857422 8.5 C 17.504717 8.5 11.602344 8.9526234 8.234375 9.65625 A 1.50015 1.50015 0 0 0 8.2128906 9.6621094 C 5.6754768 10.230693 3.2861897 12.048234 2.7832031 14.894531 A 1.50015 1.50015 0 0 0 2.78125 14.90625 C 2.394836 17.200265 2 20.190694 2 24.5 C 2 28.801151 2.3961903 31.712324 2.8847656 34.126953 C 3.4000756 36.889296 5.7342165 38.761817 8.3105469 39.337891 A 1.50015 1.50015 0 0 0 8.3476562 39.347656 C 11.86271 40.040284 17.598467 40.5 23.951172 40.5 C 30.303877 40.5 36.042686 40.04028 39.558594 39.347656 A 1.50015 1.50015 0 0 0 39.595703 39.337891 C 42.133117 38.769306 44.522404 36.951766 45.025391 34.105469 A 1.50015 1.50015 0 0 0 45.029297 34.083984 C 45.409789 31.743169 45.902812 28.755621 46 24.439453 A 1.50015 1.50015 0 0 0 46 24.40625 C 46 20.087697 45.50571 17.078675 45.023438 14.695312 C 44.512192 11.927074 42.175378 10.049478 39.595703 9.4726562 A 1.50015 1.50015 0 0 0 39.476562 9.4511719 C 36.0464 8.9689502 30.211115 8.5 23.857422 8.5 z M 23.857422 11.5 C 30.017774 11.5 35.726167 11.961361 38.966797 12.412109 C 40.559483 12.778239 41.824973 13.890643 42.074219 15.240234 A 1.50015 1.50015 0 0 0 42.078125 15.265625 C 42.543492 17.56209 42.996187 20.292628 42.998047 24.384766 C 42.904597 28.49001 42.450899 31.244675 42.070312 33.585938 C 41.810413 35.044446 40.592 36.034419 38.953125 36.40625 C 35.805209 37.023818 30.142051 37.5 23.951172 37.5 C 17.759247 37.5 12.097629 37.021978 8.9511719 36.404297 C 7.3525116 36.041193 6.081938 34.925434 5.8320312 33.572266 A 1.50015 1.50015 0 0 0 5.8261719 33.546875 C 5.3660305 31.276194 5 28.628694 5 24.5 C 5 20.378688 5.3654221 17.62199 5.7363281 15.417969 C 5.9947549 13.955585 7.2164425 12.963194 8.859375 12.591797 C 11.774266 11.984227 17.659955 11.5 23.857422 11.5 z M 20.460938 16.023438 C 18.668395 16.081606 17 17.525347 17 19.486328 L 17 28.515625 C 17 31.130266 19.966455 32.825862 22.238281 31.542969 A 1.50015 1.50015 0 0 0 22.238281 31.541016 L 30.228516 27.027344 C 32.516764 25.734577 32.516764 22.265423 30.228516 20.972656 L 22.238281 16.458984 C 21.670325 16.138261 21.058451 16.004047 20.460938 16.023438 z M 20.472656 18.980469 C 20.562791 18.985356 20.661175 19.013538 20.761719 19.070312 L 28.751953 23.585938 C 29.157705 23.815171 29.157705 24.186783 28.751953 24.416016 L 20.761719 28.929688 C 20.359545 29.156793 20 28.944984 20 28.515625 L 20 19.486328 C 20 19.271649 20.09013 19.111638 20.230469 19.033203 C 20.300636 18.993988 20.382521 18.975581 20.472656 18.980469 z"/>
              </svg>
            </a>
            <a className="mr-6 text-white"><Link to={'/'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg></Link>
            </a>
            <a className="mr-6 text-white"><Link to={'/'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg></Link>
            </a>
            <a className="text-white "><Link to={'/'}>
              <svg
                xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg></Link>
            </a>
          </div>
        </div>
  
        {/* <!-- Main container div: holds the entire content of the footer --> */}
        <div className="py-10 mx-1 text-center md:text-left">
          <div className="grid gap-8 grid-1 md:grid-cols-2 lg:grid-cols-5">
            {/* <!-- TW Elements section --> */}
            <div className="">
                <img src={Logo} alt="logo" />
            </div>
            {/* <!-- Products section --> */}
            <div className="">
              <h6 className="justify-center mb-4 font-semibold uppercase md:justify-start">Quick Links</h6>
              <p className="mb-4">
                <a className="text-white hover:text-gray-300"><Link to={'/'}>Home Page</Link></a>
              </p>
              <p className="mb-4">
                <a className="text-white hover:text-gray-300"><Link to={'/about-us'}>About Us</Link></a>
              </p>
              <p className="mb-4">
                <a className="text-white hover:text-gray-300"><Link to={'/resource-bank'}>Resource Bank</Link></a>
              </p>
              <p>
                <a className="text-white hover:text-gray-300"><Link to={'/past-events'}>Past Events</Link></a>
              </p>
            </div>
            {/* <!-- Useful links section --> */}
            <div className="">
              <h6 className="justify-center mb-4 font-semibold uppercase md:justify-start">Useful links</h6>
              <p className="mb-4">
                <a className="text-white hover:text-gray-300"><Link to={'/team'}>Our Team</Link></a>
              </p>
              <p className="mb-4">
                <a className="text-white hover:text-gray-300"><Link to={'/contact-us'}>Contact Us</Link></a>
              </p>
              <p className="mb-4">
                <a className="text-white hover:text-gray-300"><Link to={'/announcements'}>Announcements</Link></a>
              </p>
              <p>
                <a className="text-white hover:text-gray-300"><Link to={'/sign-up'}>Join With Us</Link></a>
              </p>
            </div>
            {/* <!-- Contact section --> */}
            <div>
              <h6 className="flex justify-center mb-4 font-semibold uppercase md:justify-start">Contact</h6>
              <p className="flex items-center justify-center mb-4 md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-3">
                  <path
                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path
                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                <a href='https://maps.app.goo.gl/hAABWvvgwVzfxkCH7' target='_blank' rel='noreferrer' className='text-white hover:text-gray-300'>Colombo, Sri Lanka</a>
                
              </p>
              <p className="flex items-center justify-center mb-4 md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-3">
                  <path
                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path
                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <a href='mailto:learnheart@info.lk' target='_blank' rel='noreferrer' className='text-white hover:text-gray-300'>learnheart@info.lk</a>
              </p>
              <p className="flex items-center justify-center mb-4 md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-3">
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd" />
                </svg>
                <a href='tel:+94762573095' target='_blank' rel='noreferrer' className='text-white hover:text-gray-300'>(+94) 76 257 3095</a>
              </p>
              <p className="flex items-center justify-center md:justify-start"><BsGlobe />
                <a href='https://learnheart-marketing.vercel.app/' target='_blank' rel='noreferrer' className='text-white hover:text-gray-300'>&nbsp;&nbsp;&nbsp;www.learnheart.live</a>
              </p>
            </div>
            {/* <!-- Authentication section --> */}
            <div className=''>
                <div className='flex flex-col items-center justify-center mt-3'>
                  <h6 className='font-serif text-3xl font-semibold text-white-400'>Join Us Today !</h6>
                  <Link to='/sign-up'>
                    <button className="py-3 mt-4 font-bold text-black duration-300 border px-7 rounded-3xl hover:scale-110 bg-custom-orange hover:bg-orange-600">Sign up</button>
                  </Link>
                </div>
                <hr className="my-4 border-gray-400" />
                <div className='flex items-center justify-between'>
                  <h3 className='text-gray-400 text-l'>Signed up already?</h3>
                  <Link to='/sign-in'>
                    <button className="w-full px-4 py-1 font-bold text-white duration-300 bg-transparent border border-white rounded-2xl hover:scale-110">Sign in</button>
                  </Link>
                </div>
            </div>
          </div>
        </div>
  
        {/* <!--Copyright section--> */}
        <div className="p-6 text-center bg-custom-blue">
          <span>© 2025 LearnHeart. All rights reserved. | Developed by </span>
            <Link to="/team"className={'font-semibold  text-natural-200 hover:text-gray-300'}>
              Team CodeNova
            </Link>
        </div>
      </footer>
    );
  }