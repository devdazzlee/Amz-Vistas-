import React, { useEffect } from 'react';
import '../../../Components/CardSlider/CardSlider.css';
import '../../../Components/Animation.css';
import Image1 from '../../../Images/ecom-stre-mentor-icon1.png'
import Image2 from '../../../Images/ecom-stre-mentor-icon2.png'
import Image3 from '../../../Images/ecom-stre-mentor-icon3.png'

const Shopify_Card = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.Shopify-card');
    const handleScroll = () => {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-up-element');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div     >

<div className='flex flex-wrap justify-center my-6 bg-white  '>



      <div className="Shopify-card">
      <img  className='w-16  m-auto'   src={Image1} alt="amzvistas - Product Optimization" />
      <h1>Product Optimization</h1>
  <p>Enhance your product visibility and maximize sales with our expert product optimization services tailored for Amazon sellers.</p>

      </div>
      <div className="Shopify-card">
      <img  className='w-16  m-auto'   src={Image2} alt="amzvistas - Advertising Strategies" />
      <h1>Advertising Strategies</h1>
  <p>Boost your brand's presence on Amazon through targeted advertising campaigns designed to drive traffic and increase conversions.</p>
      </div>
      <div className="Shopify-card">
      <img  className='w-16  m-auto'   src={Image3} alt="amzvistas - Listing Enhancement" />
      <h1>Listing Enhancement</h1>
  <p>Optimize your product listings for higher search rankings and improved customer engagement with our listing enhancement services.</p>

      </div>
    </div>
    </div>
  )
}

export default Shopify_Card