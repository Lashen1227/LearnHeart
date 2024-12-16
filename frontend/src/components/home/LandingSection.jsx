import contactimg from '../../assets/images/home-img/grad-img.png';
import headerImg from '../../assets/images/home-img/header-img.png';
import { Link } from 'react-router-dom';

export default function LandingSection() {
  return (
    <>
        <div className="relative min-h-screen overflow-x-hidden bg-custom-page">
            {/* Contact image */}
            <div className="relative left-20 w-full pb-4 sm:left-5 md:left-0  md:left-21 md:mb-20 xl:left-5  xl:w-[800px] xl:h-auto xl:left-[-100px] xl:bottom-16  xl:mt-0 lg:w-[650px] lg:left-50  lg:w-[400px] lg:left-80 lg:bottom-0 lg:mb-0 lg:mt-0 md:w-[550px] md:left-50 md:w-auto  md:left-[200px] md:bottom-0 md:mb-0 md:mt-0">
                <img className="object-cover w-full h-full" src={contactimg} alt="" />
            </div>

            {/* Header image */}
            <div className="hidden xl:block absolute top-0 right-0 xl:left-auto xl:right-[20px] xl:bottom-auto xl:top-[-20px]">
                <img className="object-cover w-full h-auto" src={headerImg} alt="" />
            </div>
        </div>
        
        <div className="text-center xl:absolute xl:top-1/3 xl:left-1/2 xl:transform xl:-translate-x-1/2 mb:['10px'] xl:-translate-y-1/2 xl:top-[350px]">
            <p className="mb-4 font-serif text-2xl font-semibold text-custom-blue sm:text-5xl lg:text-5xl xl:text-6xl">
                First collaborative hub <br />
                For university students in <br /> Sri Lanka
            </p>
            <Link to="/about-us">
                <button className="px-6 py-3 text-white rounded-full bg-blue-950"> About Us </button>
            </Link>
        </div>
    </>
  )
}
