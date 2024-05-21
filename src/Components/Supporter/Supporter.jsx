import {React , useEffect} from 'react'
import { Support_Card } from './Support_Card'
import '../../Components/Animation.css'
import '../Content_Strategizing/Content_Strategizing.css'
const Supporter = () => {

  useEffect(() => {
    const cards = document.querySelectorAll('.least-bottom-animate');

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
  <div className='least-bottom-animate  flex flex-col items-center py-8'>
  <h1  className='text-black least-bottom-animate  text-xl capitalize font-bold sm:text-center  '>LOOKING  MORE ABOUT AMZ VISTAS?</h1>
  <p className='least-bottom-animate  mb-4 mt-2 w-3/4 text-center sm:w-2/4 mx-auto'>Learning from others’ experiences will help you make better decisions for your business online. Here are our value-driven customers’ feedbacks.</p>
</div>

<div   className='flex flex-wrap content-strategizing_Reviews  justify-center  	'  >
<Support_Card 
imageSrc="https://images.unsplash.com/photo-1537107041341-713aaa2a234c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
title="Ramon"
description="The Amzvistas have transformed the way I approach advertising on the platform. They've streamlined the entire process, managing my ad campaigns effectively. My products are now reaching the right audience."
/>
<Support_Card 
imageSrc="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
title="Perry"
description="I've tried a few Amazon research services, and amzvistas stands out for its detailed profitability analysis. They could improve in presenting data in a more user-friendly way, but the insights I got were crucial for making informed product choices."
/>
<Support_Card 
imageSrc="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
title="Alexis"
description="Amzvistas did a decent job with my Amazon store. Their team was helpful, and the product descriptions were spot on. I did notice a couple of minor errors in the listings, but they were quick to fix them when pointed out."

/>
</div>
    </>
  )
}

export default Supporter