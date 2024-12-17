import { useState, useEffect } from 'react';
import carusel1 from '../../assets/images/home-img/carousel1.jpg';
import carusel2 from '../../assets/images/home-img/carousel2.jpg';
import carusel3 from '../../assets/images/home-img/carousel3.jpg';
import carusel4 from '../../assets/images/home-img/carousel1.jpg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: carusel1,
      topic: 'LearnHeart',
      description: 'LearnHeart empowers rural Sri Lankan schools by connecting them with volunteers and organizations to deliver impactful seminars, fostering quality education and equitable opportunities for all.'
    },
    {
      image: carusel2,
      topic: 'LearnHeart',
      description: 'LearnHeart empowers rural Sri Lankan schools by connecting them with volunteers and organizations to deliver impactful seminars, fostering quality education and equitable opportunities for all.'
    },
    {
      image: carusel3,
      topic: 'LearnHeart',
      description: 'LearnHeart empowers rural Sri Lankan schools by connecting them with volunteers and organizations to deliver impactful seminars, fostering quality education and equitable opportunities for all.'
    },
    {
      image: carusel4,
      topic: 'LearnHeart',
      description: 'LearnHeart empowers rural Sri Lankan schools by connecting them with volunteers and organizations to deliver impactful seminars, fostering quality education and equitable opportunities for all.'
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000); // Auto-slide every 7 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full mx-auto bg-custom-page">
      {/* Main slider */}
      <div className="relative w-full overflow-hidden">
        <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="relative flex-shrink-0 w-full h-[95vh]" key={index}>
              <img src={slide.image} alt={slide.topic} className="relative object-cover w-full" />
              {/* <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black bg-opacity-50">
                <div className="text-xl font-bold">{slide.topic}</div>
                <div className="mt-2 text-sm">{slide.description}</div>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute transform -translate-y-1/2 top-1/2 left-4">
        <button onClick={handlePrev} className="p-2 text-white bg-gray-800 rounded-full"> ◁ </button>
      </div>
      <div className="absolute transform -translate-y-1/2 top-1/2 right-4">
        <button onClick={handleNext} className="p-2 text-white bg-gray-800 rounded-full"> ▷ </button>
      </div>

      {/* Time bar */}
      {/* <div className="h-1 mt-2 bg-gray-300">
        <div
          className="h-1 bg-blue-500"
          style={{
            width: `${((currentIndex + 1) / slides.length) * 100}%`
          }}
        ></div>
      </div> */}
    </div>
  );
};

export default Carousel;
