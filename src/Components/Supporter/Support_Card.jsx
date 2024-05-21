import {React , useEffect} from 'react';
import '../../Components/Animation.css'
import '../CardSlider/CardSlider.css';
 export const Support_Card = ({ imageSrc, title, description, buttonText }) => {
  useEffect(() => {
    const cards = document.querySelectorAll('.height-animate');

    const handleScroll = () => {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('expandHeight');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
<div style={{ "border": "1px solid #1E2834" }} className='height-animate flex flex-col items-center justify-center rounded-4xl p-8 w-80 mr-2 rounded mb-4 sm:mb-12 bg-white'>
  <div className='flex flex-col items-center'>
    <img className='w-28 h-28 mt-8 rounded-full' src={imageSrc} alt="Profile" />
    <h3 className='mt-4 text-xl font-bold'>{title}</h3>
    <h5 className='text-sm'>{buttonText}</h5>
  </div>
  <p className='mt-4 text-center w-11/12    text-start'>{description}</p>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNv6UvU57ccO-r2dBLntqKQ1eiQlA90bY0RZA1qSedlkq_GJ3beW8nAt94Yr8n1s_T84&usqp=CAU" alt="AmzVistas Review" />

</div>

  );
};
