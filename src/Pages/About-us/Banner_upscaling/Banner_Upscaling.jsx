import {React , useEffect } from 'react'
import { Upscaling_Card } from '../../../Components/Upscaling/Upscaling_Card/Upscaling_Card'
import '../../../Components/Animation.css'
import { Link } from 'react-router-dom';
import about_image1 from '../../../Images/images-about-brnd-icon-1.png'
import about_image2 from '../../../Images/images-about-brnd-icon-2.png'
import about_image3 from '../../../Images/images-about-brnd-icon-3.png'


const Banner_Upsclaing  = () => {

  useEffect(() => {
    const cards = document.querySelectorAll('.faded-bottom-animate');

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
    <>
  <div  className='flex flex-col items-center justify-center' >
  <h1 className='faded-bottom-animate text-3xl sm:text-2xl md:text-4xl my-2 font-bold text-center sm:text-left'>
  READY TO UPSCALE YOUR E-COMMERCE BUSINESS?
</h1>
<p className='faded-bottom-animate text-sm sm:text-base md:text-md  lg:text-xl w-4/5 sm:w-2/3 text-center my-2'>
We have garnered the experience necessary to achieve explosive e-Commerce growth utilizing our best expertise in the tactics mentioned below:
</p>
<Link to={'/Contact-us'} >

<button  className="backgroundcolor-yellow neon-button  btn-getinTuch Animate-from-bottom main-center-text-rtf my-2 mr-2 w-full sm:w-auto md:w-auto lg:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full">
  Get In Touch!
</button>
</Link>


<div   className='flex  mb-8  flex-wrap' >

<Upscaling_Card
  imageSrc={about_image1}
  title="Strategy Insights"
  description="Because we want you to attain your greatest potential, all our
  strategic choices and consultations are supported by research and evidence."
  buttonText="Learn More"
/>
<Upscaling_Card
  imageSrc={about_image2}
  title="Growth Approach"
  description="Because our service approach is centered on a growth-hacking paradigm, we focus on implementing our marketing services for amazon."
  buttonText="Learn More"
/>
<Upscaling_Card
  imageSrc={about_image3}
  title="Operational Excellence"
  description="We like navigating the intricacies of the e-commerce ecosystem and strive for excellence. Our amazon marketing."
  buttonText="Learn More"
/>



</div>




  </div>
    
    </>
  )
}

export default Banner_Upsclaing