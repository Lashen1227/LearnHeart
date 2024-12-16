import Footer from "../components/Footer";
// import Carousel from "../components/home/Carousel";
import Navbar from "../components/Navbar";
import School from "../assets/images/home-img/school.webp";
import Volunteer from "../assets/images/home-img/volunteer.webp";
import Organization from "../assets/images/home-img/organization.gif";
import ChooseUSImage from "../assets/images/home-img/carousel3.jpg";
import CardSlider from "../components/home/CardSlider";
import LandingSection from "../components/home/LandingSection";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <LandingSection />
      {/* <Carousel /> */}
      
      <div className="bg-custom-page">
        {/* <---  Start Content Section ---> */}
        <p className="p-4 italic text-center">
          We believe that we can play a major role in the journey of creating a better society. During the journey,
          we have to go through many milestones. We<br /> believe this
          will impact the future of our country.
        </p>
        <div className="flex items-center justify-center p-4 space-x-4 ">
          <img src={School} alt="School Icon" className="h-20  border-2 border-[#3657AD] p-2 rounded-lg " />
          <img src={Volunteer} alt="Volunteer Icon" className="h-20 border-2 border-[#3657AD] p-2 rounded-lg" />
          <img src={Organization} alt="Organization Icon" className="h-20 border-2 border-[#3657AD] p-2 rounded-lg" />
        </div>
        
        
        {/* <---  Past Events Section ---> */}
        <h1 className="p-8 text-2xl font-bold text-center">Past Events</h1>
        <CardSlider />
        <div className="flex items-center justify-center pb-4 bg-custom-page ">
          <button className="bg-custom-blue text-white p-3 rounded-lg border-2 border-[#EC8305]">
            <Link to={'/past-events'}>Explore More</Link>
          </button>
        </div> 
        
        {/* <---  Why Choose Us Section ---> */}
        <div className="flex flex-col items-center justify-center p-6">
          <h1 className="mb-2 text-2xl font-bold text-center">Why Choose Us?</h1>
          <div className="flex flex-col items-center md:flex-row md:gap-6 lg:gap-8">
            <div className="w-full leading-relaxed text-gray-700 md:w-2/5 ml-[100px]">
              <p className="mb-4 text-lg text-justify md:mb-6 lg:mb-8">
               Our seminar volunteer program develops students leadership, collaboration, and communication abilities.
               Students gain practical experience, boost their confidence, and refine their problem-solving skills in a nurturing 
               environment by taking on significant responsibilities in event organization.
              </p>
              <p className="text-lg text-justify">
               Furthermore, by showcasing their dedication to extracurricular activities, this platform helps students 
               enhance their academic and professional profiles. It also offers opportunities to network with peers, 
               instructors, and industry leaders, paving the way for future achievements and personal growth.
              </p>
            </div>
            <div className="flex justify-center w-full md:w-1/2">
              <img src={ChooseUSImage} alt="Why Choose Us" className="object-cover rounded-lg shadow-xl h-80 w-96"/>
            </div>
          </div>
  
        </div>
      </div>
      
      <Footer />
    </>
  )
}