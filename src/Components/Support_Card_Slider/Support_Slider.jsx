import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../../Images/images-brand-logo-mm-img3.jpg'
import Image2 from '../../Images/images-brand-logo-mm-img5.jpg'
import Image3 from '../../Images/images-brand-logo-mm-img6.jpg'
import Image4 from '../../Images/images-brand-logo-mm-img7.jpg'
import Image5 from '../../Images/images-brand-logo-mm-img8.jpg'


const Support_Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); // Go to the first slide
    }
  }, []);

  const sliderSettings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full container m-auto mt-4">
      <Slider ref={sliderRef} {...sliderSettings} className="customer-logos w-full">
        <div className="slide"><img src={Image1} alt={`amz-vistas partner-logo${Image1} `} /></div>
        <div className="slide"><img src={Image2} alt={`amz-vistas partner-logo${Image2} `} /></div>
        <div className="slide"><img src={Image3} alt={`amz-vistas partner-logo${Image3} `} /></div>
        <div className="slide"><img src={Image4} alt={`amz-vistas partner-logo${Image4} `} /></div>
        <div className="slide"><img src={Image5} alt={`amz-vistas partner-logo${Image5} `} /></div>
        <div className="slide"><img src={Image3} alt={`amz-vistas partner-logo${Image1} `} /></div>
        <div className="slide"><img src={Image2} alt={`amz-vistas partner-logo${Image2} `} /></div>
        <div className="slide"><img src={Image1} alt={`amz-vistas partner-logo${Image3} `} /></div>
        <div className="slide"><img src={Image5} alt={`amz-vistas partner-logo${Image4} `} /></div>
      </Slider>
    </div>
  );
}

export default Support_Slider;
