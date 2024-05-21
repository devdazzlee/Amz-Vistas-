import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../Components/Animation.css'
import './CardSlider.css';

const CardSlider = () => {


  useEffect(() => {
    const cards = document.querySelectorAll('.main-center-text-rtf');

    const handleScroll = () => {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-from-right');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const [sliderIndex, setSliderIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    onReInit: () => setSliderIndex(0),
    afterChange: (current) => setSliderIndex(current),
  };

  useEffect(() => {
    const interval = setInterval(() => {
        setSliderIndex((prevIndex) => (prevIndex + 1) % 3); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='text-center main-Offer-card animate-card-from-right'>
  <div  className='fade-up-element flex flex-col  items-center my-6	' >

     <h3 className='text-2xl font-bold' style={{ color: '#333333' }}>
        OUR SERVICES
      </h3>
      <p className='mb-4 mt-2 w-3/4	'>
      With our comprehensive Amazon Marketing Services, we engage brands to cultivate a flourishing business cycle by implementing a dynamic and adaptable advertising strategy on the Amazon platform
      </p>
     </div>

      <Slider className='main-center-text-rtf'  {...settings} slickGoTo={sliderIndex}>
        <div className='Offer-card '>
          <h1>AMAZON STORE CREATION</h1>
          <p>We develop and establish an intelligent Amazon presence to help your storefront become a significant marketplace contender.</p>
          <button style={{"background" : "#FF9903" , "color" : "#000000"  }}  className='mt-4   w-36   font-bold py-2 px-4 rounded-full'>Learn More</button>
        </div>

        <div className='Offer-card'>
          <h1>AMAZON PRODUCT HUNTING</h1>
          <p>We meticulously analyze the market landscape, conducting in-depth research to pinpoint a winning product that not only holds immense value  </p>
          <button style={{"background" : "#FF9903" , "color" : "#000000"  }}  className='mt-4 w-36   font-bold py-2 px-4 rounded-full'>Learn More</button>
        </div>

        <div className='Offer-card'>
          <h1>EBC/A+ CONTENT</h1>
          <p>Our Amazon marketing service creates enticing shops for increased ROI by combining substantial content and visually appealing designs.</p>
          <button   style={{"background" : "#FF9903" , "color" : "#000000"  }} className='mt-4 w-36   font-bold py-2 px-4 rounded-full'>Learn More</button>
        </div>
        <div className='Offer-card'>
          <h1>AMAZON PPC</h1>
          <p>Our forward-thinking Amazon marketing strategy provides brand visibility at every point of the business cycle.</p>
          <button  style={{"background" : "#FF9903" , "color" : "#000000"  }}  className='mt-4 w-36   font-bold py-2 px-4 rounded-full'>Learn More</button>
        </div>
        <div className='Offer-card'>
          <h1>VIRUTAL ASSISTANT</h1>
          <p>We employ our expertise in virtual assistance to aid brands with shop management inventory and product listings.</p>
          <button   style={{"background" : "#FF9903" , "color" : "#000000"  }} className='mt-4 w-36   font-bold py-2 px-4 rounded-full'>Learn More</button>
        </div>
      </Slider>
    </div>
  );
};

export default CardSlider;
