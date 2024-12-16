import Footer from "../components/Footer";
// import Carousel from "../components/home/Carousel";
import Navbar from "../components/Navbar";
import School from "../assets/images/home-img/school.webp";
import Volunteer from "../assets/images/home-img/volunteer.webp";
import Organization from "../assets/images/home-img/organization.gif";
import CardSlider from "../components/home/CardSlider";


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
         <h1 className="p-8 text-2xl font-bold text-center">Past Events</h1>
      </div>
      <CardSlider />
      <div className="flex items-center justify-center bg-custom-page pb-4 ">
  <button className="bg-[#3657AD] text-white p-2 rounded-lg">
    Explore More
  </button>
</div>
      
      <Footer />
    </>
  )
}