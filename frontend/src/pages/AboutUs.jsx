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
            <p className="text-[30px] font-bold text-center text-black">
              &quot;Volunteering is the ultimate expression of compassion in action, making a difference one act at a time.&quot;
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
              <h2 className="mb-8 text-4xl font-bold text-center text-black ">About Us</h2>
              <p className="text-2xl leading-relaxed text-center text-black">
              LearnHeart unites volunteers and organizations to bridge educational gaps in rural Sri Lanka.
               Through project matching and seamless collaboration, we’re creating equal learning opportunities
                and building brighter futures. Join us in making a difference!
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
              <h2 className="mb-8 text-4xl font-bold text-center text-white">Our Vision</h2>
              <p className="text-2xl leading-relaxed text-center text-white">
              Our vision is to create equal learning opportunities for every child, empowering communities
              through education and meaningful connections.
              </p>
            </div>
          </div>
  
            
          
        </div>
        <Footer />  
      </>
    );
  }
  
  export default AboutUs;