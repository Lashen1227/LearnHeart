import image1 from '../../assets/images/home-img/landing-img1.png';
import image2 from '../../assets/images/home-img/landing-img2.png';
// import img from '../../assets/images/home-img/cover.png';
import { Link } from 'react-router-dom';

export default function LandingSection() {
  return (
    <>
        <div className="relative min-h-screen overflow-x-hidden bg-custom-page">
            {/* <div className="hidden xl:block top-0 left-0 xl:right-auto xl:left-[20px] xl:bottom-auto xl:top-[20px]">
                <img className="object-cover w-full h-[95vh]" src={img} alt="" />
            </div> */}
            
            <div className="absolute hidden xl:block left-0 bottom-10 max-w-[650px] sm:max-w-[550px]">
                <img className="object-cover w-auto h-auto" src={image1} alt="" />
            </div>

            <div className="hidden xl:block absolute top-0 right-0 xl:left-auto xl:right-[5px] xl:bottom-auto xl:top-[-20px]">
                <img className="object-cover w-full h-auto" src={image2} alt="" />
            </div>
        </div>
        
        <div className="text-center xl:absolute xl:top-1/3 xl:left-1/2 xl:transform xl:-translate-x-1/2 mb:['10px'] xl:-translate-y-1/2 xl:top-[350px] bg-transparent">
            <p className="mb-4 font-serif text-2xl font-semibold sm:text-5xl lg:text-5xl xl:text-6xl text-blue-950">
                Connecting Schools <br />
                with Volunteers <br /> Spark Brighter Futures!
            </p>
            <Link to="/about-us">
                <button className="px-6 py-3 text-white duration-300 bg-blue-900 rounded-full hover:scale-110 hover:bg-blue-800">
                    About Us
                </button>
            </Link>
        </div>
    </>
  )
}
