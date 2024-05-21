import {React , useEffect} from 'react'
import '../../../Components/Animation.css'

const Heading_Component = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.Animate-from-bottom');

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
    <>
    <div className='Animate-from-bottom flex flex-col  items-center text-center py-12'>
  <h1 className='Animate-from-bottom text-2xl capitalize font-extrabold text-black'>READY TO UPSCALE YOUR E-COMMERCE BUSINESS?</h1>
  <p className='Animate-from-bottom mb-4 mt-2 w-4/6 text-center'>
  We have garnered the experience necessary to achieve explosive e-Commerce growth utilizing our best expertise in the tactics mentioned below:
  </p>
</div>
    
    </>
  )
}

export default Heading_Component