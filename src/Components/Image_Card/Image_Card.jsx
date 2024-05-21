import React, { useEffect, useState } from 'react';
import image_contact from '../../Images/images-about-img-new-2.png'
import image1 from '../../Images/images-about-icon-new-1.png'
import image2 from '../../Images/images-about-brnd-icon-2.png'
import image3 from '../../Images/images-about-brnd-icon-3.png'


const Image_Card = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.animation-from-left');
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
    <div className='ImageCard py-10 w-full'>
      <div className="flex flex-wrap animation-from-left">
        <div className=" md:w-2/5	md:ml-20		 h-4/5 mb-4 md:mb-0">
          <img className='w-full md:w-11/12' src={image_contact}  alt="Amz Vistas Testimonial Image" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold image-card-subheading">
          THRIVE AND GROW WITH AMZ Vistas
          </h1>
          <p className='py-4'>
          Our most effective campaigns are those that combine astute planning with astute execution to send brands on a never-ending mission. We outline the tactics that, in our opinion, are worthwhile expenditures for companies hoping to take the lead in the Amazon marketplace, by staying up to date, we manage, strategize, and drastically reduce any access obstacles.
          </p>
          <div className='flex flex-col md:flex-row'>
          <div className="animation-from-left w-full md:w-1/2 mb-4 md:mb-0 flex justify-center items-center">
    <div className='text-center md:text-left'>
        <img className='w-1/5 h-1/5 mx-auto' src={image1} alt="Amz Vistas Expert Consultation Image"/>
        <h2 className='font-bold' style={{ "color": "#334066" }}>Expert consultation</h2>
    </div>
</div>
<div className="animation-from-left w-full md:w-1/2 mb-4 md:mb-0 flex justify-center items-center">
    <div className='text-center md:text-left'>
        <img className='w-1/5 h-1/5 mx-auto' src={image2} alt="Amz Vistas Operational Help Image" />
        <h2 className='font-bold' style={{ "color": "#334066" }}>Operational help</h2>
    </div>
</div>
  
<div className="animation-from-left w-full md:w-1/2 mb-4 md:mb-0 flex justify-center items-center">
    <div className='text-center md:text-left'>
        <img className='w-1/5 h-1/5 mx-auto' src={image3} alt="Amz Vistas Tracking & Reporting Image" />
        <h2 className='font-bold' style={{ "color": "#334066" }}>Tracking & reporting</h2>
    </div>
</div>
</div>


        </div>
      </div>
    </div>
  );
}

export default Image_Card;
