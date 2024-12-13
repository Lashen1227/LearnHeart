import { data } from "./carouselData";
import { useState } from "react";
import "./carousel_styles.css";
import { useEffect } from "react";


export default function Carousel() {

    const [activeImage, setActiveImage] = useState(0);
    const handlePrev = () => {
        if (activeImage <= 0){
            setActiveImage(data.length - 1);
        }else{
            setActiveImage(activeImage - 1);
        }  
    };
    const handleNext = () => {
        setActiveImage((activeImage + 1) % data.length);
    };

    useEffect (() => {
        let timer = setTimeout(() => {
            handleNext();
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    },[activeImage])

  return (
    <div className="carousel">
        <button onClick={handlePrev}>Prev</button>
        {
            data.map((item,i) => {
                return (
                    <img className={activeImage === i ? "img" : "hide"} src={item.url} alt={item.alt} title={item.alt} key={item.id}/>
                )
            })
        }
        <button onClick={handleNext}>Next</button>
    </div>
  )
}
