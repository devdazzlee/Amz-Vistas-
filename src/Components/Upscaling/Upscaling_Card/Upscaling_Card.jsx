import{ React  , useEffect } from 'react';
import '../../CardSlider/CardSlider.css';

 export const Upscaling_Card = ({ imageSrc, title, description, buttonText }) => {


  useEffect(() => {
    const cards = document.querySelectorAll('.bottom-Animation');

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
    <div className='bottom-Animation   flex flex-col items-center h-auto w-96  m-auto rounded-4xl '>
   <img
  className='w-28 h-28 mt-8 p-2 rounded-full yellow-dotted-border'
  src={imageSrc}
  alt="Amzvistas Amazon Services"
  style={{ border: '4px dotted #FF9903' }}
/>


      <div className='Offer-card-upscaling'>
        <h1  style={{"fontFamily" : "serif"}} className='font-bold' >{title}</h1>
        <p className='text-center' >{description}</p>
      </div>
    </div>
  );
};
