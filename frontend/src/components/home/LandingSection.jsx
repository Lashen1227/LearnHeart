import img from '../../assets/images/home-img/cover.png';
import { Link } from 'react-router-dom';

export default function LandingSection() {
  return (
    <>
        <div className="relative min-h-screen overflow-x-hidden bg-custom-page">
            <div className="xl:block top-0 left-0 xl:right-auto xl:left-[20px] xl:bottom-auto xl:top-[20px]">
                <img className="object-cover w-full h-[95vh]" src={img} alt="" />
            </div>
        </div>
        
        <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <p className="font-serif text-2xl font-bold text-transparent sm:text-3xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-br from-white/100 to-[#a0c4ff75] leading-tight sm:leading-snug md:leading-normal">
                Connecting Schools <br />
                with Volunteers, <br /> Sparking Brighter Futures!
            </p><br /><br />
            <Link to="/about-us">
                <button className="px-6 py-3 font-serif font-bold text-white duration-300 bg-transparent border border-white rounded-2xl hover:scale-110">
                    About Us
                </button>
            </Link>
        </div>
    </>
  )
}
