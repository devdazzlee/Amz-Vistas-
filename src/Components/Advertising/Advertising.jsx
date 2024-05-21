import {React , useEffect } from 'react'
import Support_Slider from '../Support_Card_Slider/Support_Slider'
import '../../Components/Animation.css'
const Advertising = () => {
  
  useEffect(() => {
    const cards = document.querySelectorAll('.text-animate-bottom');

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
  return (
    <div      style={{background : "#232F3F"}}  className='flex flex-col items-center    py-16 my-16' >
  <h1 className='text-animate-bottom text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white my-2 text-center'>
  We Elevate Your Business Through Multiple E-commerce Platforms
  </h1>
<p style={{ fontWeight: 'normal' }} className='text-animate-bottom text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white w-full sm:w-4/5 text-center mx-auto my-2'>
  Speak with one of our consultants to evaluate your brand or product in-depth and discover how to sell it to the ideal buyers!
</p>



<Support_Slider/>
    </div>
  )
}

export default Advertising