
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardSliderImage1 from "../../assets/images/home-img/CardSliderImage1.jpg";
import CardSliderImage2 from "../../assets/images/home-img/CardSliderImage2.jpeg";
import CardSliderImage3 from "../../assets/images/home-img/CardSliderImage3.jpg";

function CardSlider() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='w-full py-8 bg-custom-page'>
      <Carousel responsive={responsive} containerClass="carousel-container"
    itemClass="carousel-item">
  <div className="flex items-center justify-center h-80 w-96 border-2 border-[#3657AD] bg-blue-50 rounded-lg shadow-lg"> 
    <img src={CardSliderImage1} alt="CardSliderImage1" />
  </div>
  <div className="flex items-center justify-center h-80 w-96 border-2 border-[#3657AD] bg-blue-50 rounded-lg shadow-lg">
    <img src={CardSliderImage2} alt="CardSliderImage2" />
  </div>
  <div className="flex items-center justify-center h-80 w-96 border-2 border-[#3657AD] bg-blue-50 rounded-lg shadow-lg">
    <img src={CardSliderImage3} alt="CardSliderImage3" />
  </div>
  <div className="flex items-center justify-center border-2 border-blue-500 rounded-lg shadow-lg h-80 w-96 bg-blue-50">
    <img src={CardSliderImage3} alt="CardSliderImage3" />
  </div>
  
</Carousel>;
      

    </div>
  )
}

export default CardSlider