import React, { useEffect } from 'react';
import '../../../Components/CardSlider/CardSlider.css'
import Image1 from '../../../Images/ecom-stre-mentor-icon4.png'
import Image2 from '../../../Images/ecom-stre-mentor-icon6.png'
import Image3 from '../../../Images/ecom-stre-mentor-icon5.png'


const Shopify_Card_sec = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.Offer-card');
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
    <div>

<div className='flex flex-wrap justify-center my-6 bg-white  '>
      <div className="Shopify-card">
      <img  className='w-16  m-auto'   src={Image1} alt="amzvistas - Data-Driven Strategies" />
      <h1>Data-Driven Strategies</h1>
    <p>At AMZ Vistas, we leverage our passion for data to craft and refine strategy insights, ensuring improved performance and relevance for your Amazon business.</p>
      </div>
      <div className="Shopify-card">
      <img  className='w-16  m-auto'   src={Image2} alt="amzvistas - Cost-Effective Solutions" />
      <h1>Cost-Effective Solutions</h1>
    <p>Our focus is customer-centric, offering small and medium-sized brands cost-efficient plans to liberate them from financial constraints while maximizing results.</p>
      </div>
      <div className="Shopify-card">
      <img  className='w-16  m-auto'   src={Image3} alt="amzvistas - Expert Dream Team" />
      <h1>Expert Dream Team</h1>
    <p>Meet our team of seasoned Amazon marketing specialists and growth hackers, united by the singular goal of skyrocketing your online sales and business growth.</p>

      </div>
    </div>
    </div>
  )
}

export default Shopify_Card_sec