import {React , useEffect} from 'react';
import './Content_Strategizing.css';
import '../../Components/Animation.css'
import Image1 from '../../Images/images-custom-cta-img1.png'
import Image2 from '../../Images/images-custom-cta-img2.png'
import Image3 from '../../Images/images-custom-cta-img3.png'
import Image4 from '../../Images/images-custom-cta-img4.png'
import Image5 from '../../Images/images-custom-cta-img5.png'
import Image6 from '../../Images/images-custom-cta-img6.png'



const Content_Strategizing = () => {

  useEffect(() => {
    const cards = document.querySelectorAll('.faded-top-animate');
    const cards1 = document.querySelectorAll('.faded-top-right');

    const handleScroll = () => {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-up-element');
        }
      });
      cards1.forEach((card) => {
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
    <div className='content-strategizing my-12'>
      <div className='flex flex-col items-center'>
        <div className='text-center mb-6'>
          <h1 className='faded-top-right font-extrabold text-black text-2xl sm:text-xl'>
            “Content Strategizing is an excellent chance for sellers to market their product benefits.“
          </h1>
          <h1 className='faded-top-right font-extrabold text-black text-xl mt-2'>Rick Jhonson</h1>
          <h1 className='faded-top-right font-bold'>VP OF MARKETING</h1>
        </div>
        <div className='flex flex-col sm:flex-row justify-center items-center'>
          <img src={Image1} alt="Amz Vistas Content Strategy Workshop" className='mb-4 sm:mb-0 sm:mr-4 faded-top-animate' />
          <img src={Image2} alt="Amz Vistas Content Strategy Implementation" className='mb-4 sm:mb-0 sm:mr-4 faded-top-animate' />
          <img src={Image3} alt="Amz Vistas Content Strategy Analysis" className='mb-4 sm:mb-0 faded-top-animate' />
        </div>
        <div className='flex mt-4'>
        <img src={Image4} alt="Amz Vistas Content Strategy Consulting" className='mr-4 faded-top-animate' />
      <img src={Image5} alt="Amz Vistas Content Strategy Development" className='mr-4 faded-top-animate' />
      <img src={Image6} alt="Amz Vistas Content Strategy Optimization" className='mr-4 faded-top-animate' />

        </div>
      </div>
    </div>
  );
}

export default Content_Strategizing;
