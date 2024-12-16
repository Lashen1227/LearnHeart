import Footer from "../components/Footer";
// import Carousel from "../components/home/Carousel";
import Navbar from "../components/Navbar";
import School from "../assets/images/home-img/school.webp";
import Volunteer from "../assets/images/home-img/volunteer.webp";
import Organization from "../assets/images/home-img/organization.gif";
<<<<<<< HEAD
import ChooseUSImage from "../assets/images/home-img/choose-us.png";
=======
import CardSlider from "../components/home/CardSlider";

>>>>>>> cc31506eeb3bfd687ca0a0f9ce6b01367e473a97

export default function HomePage() {
  return (
    <>
      <Navbar />
      {/* <Carousel /> */}
      <div className="bg-custom-page">
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
<<<<<<< HEAD
         <h1 className="p-8 text-5xl font-bold text-center">Past Events</h1>
         <div className="flex flex-col items-center justify-center p-6" >
         <h1 className="font-bold text-2xl mb-4 text-center">Why Choose Us?</h1>
          <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={ChooseUSImage}
              alt="Why Choose Us"
              className="w-1/2 md:w-2/3 h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-gray-700 leading-relaxed">
      <p className="text-lg mb-10 text-justify">
        Our seminar volunteer program develops students leadership, collaboration, and communication abilities. Students get practical experience, boost their confidence, and develop their problem-solving skills in a nurturing setting by taking on significant responsibilities in event organisation. 
        </p>
        <p className="text-lg mb-10 text-justify">
        Furthermore, by showcasing their dedication to extracurricular activities, this platform assists students in enhancing their academic and professional profiles. Additionally, it offers chances to network with classmates, instructors, and business leaders, opening doors for future achievement and personal development.
        </p> 
        </div>
        </div>
        </div>
        </div>
=======
         <h1 className="p-8 text-2xl font-bold text-center">Past Events</h1>
      </div>
      <CardSlider />
      <div className="flex items-center justify-center pb-4 bg-custom-page ">
  <button className="bg-[#3657AD] text-white p-2 rounded-lg">
    Explore More
  </button>
</div>
      
>>>>>>> cc31506eeb3bfd687ca0a0f9ce6b01367e473a97
      <Footer />
    </>
  )
}