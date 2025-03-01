import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import pictureOne from "../assets/images/about_us-img/abtus1.jpg";
import pictureTwo from "../assets/images/about_us-img/abtus2.png";


function AboutUs() {
  

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
              <h1 className="pb-4 text-xl font-bold text-custom-black md:text-2xl">About Us</h1>
              <p className="text-sm md:text-base text-custom-black">
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
              <h1 className="pb-4 text-xl font-bold text-custom-white md:text-2xl">Our Vision</h1>
              <p className="text-sm md:text-base text-custom-white">
              Our vision is to create equal learning opportunities for every child, empowering communities
              through education and meaningful connections. Together, we <span className="italic">join hands to ignite minds</span> to uplift communities and create a more
              inclusive and equitable world to believe in the transformative power of education.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative p-5 mt-16 text-center bg-custom-page">
            <h1 className="-mb-20 text-2xl font-bold text-black">Why<br></br>LearnHeart?</h1> 
          
          {/* SVG Lines */}
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 800 200"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="120"
              y1="75"
              x2="250"
              y2="170"
              stroke="#3657AD"
              strokeWidth="3"
            />
            <line
              x1="330"
              y1="155"
              x2="459"
              y2="58"
              stroke="#3657AD"
              strokeWidth="3"
            />
            <line
              x1="650"
              y1="150"
              x2="500"
              y2="67"
              stroke="#3657AD"
              strokeWidth="3"
            />
          </svg>
            
            <div className="flex items-center justify-center p-10 gap-28">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-32 h-32 text-3xl rounded-full text-custom-orange bg-custom-blue">
                  <i className="items-center text-4xl fas fa-chalkboard"></i>
                </div>
                <p className="mt-2 text-[16px] text-custom-black">Request School<br></br>Seminars</p>
              </div>
              <div className="flex flex-col items-center mt-72">
                <div className="flex items-center justify-center w-40 h-40 text-3xl rounded-full text-custom-orange bg-custom-blue">
                  <i className="items-center text-6xl fas fa-user-friends"></i>
                </div>
                <p className="mt-2 text-[16px] text-custom-black">Help Students</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-32 h-32 text-3xl rounded-full text-custom-orange bg-custom-blue">
                  <i className="text-4xl fas fa-network-wired"></i>
                </div>
                <p className="mt-2 text-[16px] text-custom-black">Connect with<br></br>Volunteers</p>
              </div>
              <div className="flex flex-col items-center mt-72">
                <div className="flex items-center justify-center w-40 h-40 text-3xl rounded-full text-custom-orange bg-custom-blue">
                  <i className="text-6xl fas fa-book"></i>
                </div>
                <p className="mt-2 text-[16px] text-custom-black">Access to<br></br>Resources</p>
              </div>
            </div>
          </div>





          </div>
  
            
          
        
        <Footer />  
      </>
    );
  }
  
  export default AboutUs;