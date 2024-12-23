import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import pictureOne from "../assets/images/about_us-img/abtus1.jpg";
import pictureTwo from "../assets/images/about_us-img/abtus2.png";

function AboutUs() {
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center h-full py-5 bg-blue-50">
  
          {/* Card 1 */}
          <div className="flex items-center max-w-7xl ml-150px m-4 rounded-lg shadow-md bg-custom-orange">
            <p className="text-2xl font-bold text-center text-black">
              &quot;Volunteering is the ultimate expression of compassion in action, making a difference <br/> one act at a time.&quot;
            </p>
          </div>
  
          {/* Card 2 */}
          <div className="flex flex-row-reverse items-center h-auto max-w-7xl gap-5 p-10 m-4 bg-blue-50 mt-16">
            <img
              className="h-auto max-w-md mb-2 rounded-lg"
              src={pictureTwo}
              alt="About Us"
            />
            <div className="flex flex-col items-center justify-center">
              <h2 className="mb-8 text-2xl font-bold text-center text-black ">About Us</h2>
              <p className="text-lg leading-relaxed text-center text-black">
              LearnHeart unites volunteers and organizations to bridge educational gaps in rural Sri Lanka.
              Through project matching and seamless collaboration, we’re creating equal learning opportunities
              and building brighter futures. We believe in the power of education to transform lives and build brighter futures.<br/>
              Join us in creating a lasting impact on education!
              </p>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="flex items-center max-w-7xl gap-5 p-10 m-4 border-2 shadow-md border-custom-orange bg-custom-blue rounded-2xl mt-16">
            <img
              className="h-auto max-w-md mb-2 rounded-lg"
              src={pictureOne}
              alt="Vision"
            />
            <div className="flex flex-col items-center justify-center">
              <h2 className="mb-8 text-2xl font-bold text-center text-white">Our Vision</h2>
              <p className="text-lg leading-relaxed text-center text-white">
              Our vision is to create equal learning opportunities for every child, empowering communities
              through education and meaningful connections. Together, we 𝘫𝘰𝘪𝘯 𝘩𝘢𝘯𝘥𝘴 𝘵𝘰 𝘪𝘨𝘯𝘪𝘵𝘦 𝘮𝘪𝘯𝘥𝘴  to uplift communities and create a more
              inclusive and equitable world to believe in the transformative power of education.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-5 text-center bg-blue-50 mt-16 relative">
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
              y1="153"
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
                  <i className="fas fa-chalkboard items-center text-4xl"></i>
                </div>
                <p className="mt-2 text-[16px] text-black">Request School<br></br>Seminars</p>
              </div>
              <div className="flex flex-col items-center mt-72">
                <div className="flex items-center justify-center w-40 h-40 text-3xl rounded-full text-custom-orange bg-custom-blue">
                  <i className="fas fa-user-friends items-center text-6xl"></i>
                </div>
                <p className="mt-2 text-[16px] text-black">Help Students</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-32 h-32 text-3xl rounded-full text-custom-orange bg-custom-blue">
                  <i className="fas fa-network-wired text-4xl"></i>
                </div>
                <p className="mt-2 text-[16px] text-black">Connect with<br></br>Volunteers</p>
              </div>
              <div className="flex flex-col items-center mt-72">
                <div className="flex items-center justify-center w-40 h-40 text-3xl rounded-full text-custom-orange bg-custom-blue">
                  <i className="fas fa-book text-6xl"></i>
                </div>
                <p className="mt-2 text-[16px] text-black">Access to<br></br>Resources</p>
              </div>
            </div>
          </div>





          </div>
  
            
          
        
        <Footer />  
      </>
    );
  }
  
  export default AboutUs;