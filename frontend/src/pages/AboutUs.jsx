import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import pictureOne from "../assets/images/about_us-img/abtus1.jpg";
import pictureTwo from "../assets/images/about_us-img/abtus2.png";
import pictureThree from "../assets/images/about_us-img/abtus3.png";
import { useNavigate } from "react-router-dom";

function AboutUs() {
    const navigate = useNavigate();

    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center h-full py-20 bg-custom-page">
  
          {/* Card 1 - Quote */}
          <div className="flex items-center justify-center w-full max-w-[1280px] m-6 p-4 md:p-6 rounded-2xl shadow-md bg-custom-orange">
            <p className="text-lg font-bold text-center text-custom-black md:text-2xl max-w-5xl">
              &quot;Volunteering is the ultimate expression of compassion in action, making a difference <br className="hidden md:block"/> one act at a time.&quot;
            </p>
          </div>
  
          {/* Card 2 - About Us*/}
          <div className="flex flex-col md:flex-row-reverse items-center w-full h-auto gap-5 p-4 md:p-10 m-4 mt-16 max-w-7xl bg-custom-page">
            <img
              className="w-full max-w-md rounded-lg"
              src={pictureOne}
              alt="About Us"
            />
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="mb-4 text-2xl font-bold text-center md:text-3xl text-custom-black">About Us</h1>
              <p className="mb-4 text-base text-center md:text-lg md:mb-6 text-custom-black">
              LearnHeart unites volunteers and organizations to bridge educational gaps in rural Sri Lanka.
              Through project matching and seamless collaboration, we’re creating equal learning opportunities
              and building brighter futures. We believe in the power of education to transform lives and build brighter futures.<br/>
              <span className="font-semibold">Join us in creating a lasting impact on education!</span>
              </p>
            </div>
          </div>
  
          {/* Card 3 - Our Vision */}
          <div className="flex flex-col md:flex-row items-center w-full gap-5 p-4 md:p-10 m-4 mt-16 border-2 shadow-md max-w-7xl border-custom-orange bg-custom-blue rounded-2xl">
            <img
              className="w-full max-w-md rounded-lg"
              src={pictureTwo}
              alt="Vision"
            />
            <div className="flex flex-col items-center justify-center text-center">
              < h1 className="mb-4 text-2xl font-bold text-center md:text-3xl text-custom-white">Our Vision</h1>
              <p className="mb-4 text-base text-center md:text-lg md:mb-6 text-custom-white">
              Our vision is to create equal learning opportunities for every child, empowering communities
              through education and meaningful connections. Together, we <span className="italic">join hands to ignite minds</span> to uplift communities and create a more
              inclusive and equitable world to believe in the transformative power of education.
              </p>
            </div>
          </div>

          {/* Card 4 - Why LearnHeart? */}
          <div className="relative w-full p-4 md:p-5 mt-16 text-center bg-custom-page">
            <h1 className="mb-4 text-2xl font-bold text-center md:text-3xl text-custom-black">Why<br/>LearnHeart?</h1> 

            {/* Image with Clickable Areas */}
          <div className="relative w-full max-w-screen-lg mx-auto">
            <img
              className="w-full h-auto mb-2 rounded-lg"
              src={pictureThree}
              alt="Why LearnHeart"
            />

            {/* Clickable Areas Over the Circles */}
            <div className="absolute top-0 left-0 w-full h-full">
              
              {/* Circle 1 - Request School Seminars */}
              <div
                className="absolute w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full cursor-pointer"
                style={{ top: "15%", left: "5%" }}
                onClick={() => navigate("/request-seminar")}
              ></div>

              {/* Circle 2 - Help Students */}
              <div
                className="absolute w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full cursor-pointer"
                style={{ top: "50%", left: "30%" }}
                onClick={() => navigate("/help-students")}
              ></div>

              {/* Circle 3 - Connect with Volunteers */}
              <div
                className="absolute w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full cursor-pointer"
                style={{ top: "15%", left: "57%" }}
                onClick={() => navigate("/volunteers")}
              ></div>

              {/* Circle 4 - Access to Resources */}
              <div
                className="absolute w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full cursor-pointer"
                style={{ top: "50%", left: "85%" }}
                onClick={() => navigate("/resource-bank")}
              ></div>
            </div>
          </div>
        </div>

        <Footer />  
      </div>
    </>
  );
}

export default AboutUs;

        
          
         
  
            
          
        
        