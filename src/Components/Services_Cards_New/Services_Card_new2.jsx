import React, { useEffect } from 'react';
import '../CardSlider/CardSlider.css';
import '../Animation.css';
const Services_Card_New2 = () => {
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



      <div className="Services-card">
      <img  className='w-16  m-auto'   src='https://vaamazon.com/wp-content/uploads/2023/06/cost-per-click.png'  alt="AmzVistas - Amazon PPC"  />
        <h1>Amazon PPC </h1>
        <p>With our specialized Amazon PPC solutions, we harness the power of targeted advertising to ensure your products reach the right audience at the right time.</p>
      </div>
      <div className="Services-card">
      <img  className='w-16  m-auto'   src='https://vaamazon.com/wp-content/uploads/2023/06/copy-writing.png' alt="AmzVistas - EBC/A+ content" />
        <h1>EBC/A+ content</h1>
        <p>Our professionals understand the power of enhanced brand, creating a seamless blend of creativity and strategy to showcase your products in the best light</p>
      </div>
      <div className="Services-card">
      <img  className='w-16  m-auto'   src='https://vaamazon.com/wp-content/uploads/2023/06/hunting.png' alt="AmzVistas - Amazon Product Hunting" />
        <h1>Amazon product Hunting</h1>
        <p>we are specialized in the art and science of product hunting, leveraging market insights and cutting-edge strategies to uncover hidden gems </p>
      </div>
      <div className="Services-card">
      <img  className='w-16  m-auto'   src='https://vaamazon.com/wp-content/uploads/2023/06/seo-1-1.png'  alt="AmzVistas - Amazon SEO Services" />
        <h1>Amazon SEO Services</h1>
        <p>We deliver unparalleled Amazon SEO Services, harnessing strategic optimization techniques to boost your product visibility & drive organic traffic</p>
      </div>
    </div>
    </div>
  )
}

export default Services_Card_New2