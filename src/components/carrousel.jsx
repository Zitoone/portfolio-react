import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function SimpleSlider(){
   const settings={
      dots:true,
      infinite: true,
      speed:500,
      slidesToShow:2,
      slidesToScroll:1,
      autoplay:true,
      autoplaySpeed:2000,
      // adaptiveHeight: true,
      pauseOnFocus: true,
      centerMode:true,


   }
   return(
      <>
      <h1>Projets réalisés</h1>
      <Slider{...settings}>
      <div>
         <img src="/images/Projets/Brigitte.jpg" alt="Projet Brigitte" />
      </div>
      <div>
         <img src="/images/Projets/Magnet.png" alt="Projet Magnet" />
      </div>
      <div>
         <img src="/images/Projets/fonciere.jpg" alt="Projet Foncière" />
      </div>
      <div>
      <img src="/images/Projets/Hagile.png" alt="Projet Hagile" />
      </div>
      <div>
      <img src="images/Projets/Skillfacile.png" alt="Projet Skill facile" />
      </div>
      </Slider>
      </>
   )
}