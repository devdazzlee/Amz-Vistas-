import {React , useEffect} from 'react'
import './Scaling_Mid_Sec.css'
import '../../Components/Animation.css'
const Scaling_Mid_Sec = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.faded-right-animation');
    const cards2 = document.querySelectorAll('.faded-top-animation');

    const handleScroll = () => {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-from-right');
        }
      });
      cards2.forEach((card) => {
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
    <div style={{"background" : "#232F3F"}} className='py-12'   >


<div className='flex flex-col flex-wrap items-center '>
  <h1  className=' faded-right-animation text-white text-2xl capitalize font-bold sm:text-center'>SCALING MID-TO-LARGE SCALE PRODUCTS BRANDS ON AMAZON</h1>
  <p className=' faded-right-animation text-white   mb-4 mt-2 w-3/4 text-center sm:w-2/4 mx-auto'>Over the years we have implemented techniques that set the pace of Amazon advertising for product brands; aiming for meticulous account management. AMZ Vistas reaches for high visibility and better conversions on Amazon.</p>


  <div className='Number_Card flex w-10/12 h-auto justify-between my-10 '>
  <div className="faded-top-animation elementor-field elementor-select-wrapper remove-before text-center">
    <h1 className='text-4xl font-bold text-white' >225 <span style={{ "color": "#FF9903" }}>+ </span> </h1>
    <p className='text-white font-bold' >Dedicated Amazon<br />Marketing Specialist</p>
  </div>
  <div className="faded-top-animation elementor-field elementor-select-wrapper remove-before text-center">
    <h1 className='text-4xl font-bold text-white' >96 <span style={{ "color": "#FF9903" }}>%</span> </h1>
    <p className='text-white font-bold' >Unmatched Client<br />Satisfaction</p>
  </div>
  <div className="faded-top-animation elementor-field elementor-select-wrapper remove-before text-center">
    <h1 className='text-4xl font-bold text-white' >2500<span style={{ "color": "#FF9903" }}>+</span> </h1>
    <p className='text-white font-bold' >Daily<br />Visitors</p>
  </div>
  <div className="faded-top-animation elementor-field elementor-select-wrapper remove-before text-center">
    <h1 className='text-4xl font-bold text-white' >20 <span style={{ "color": "#FF9903" }}>+</span> </h1>
    <p className='text-white font-bold' >Years of<br />Experience</p>
  </div>
  <div className="faded-top-animation elementor-field elementor-select-wrapper remove-before text-center">
    <h1 className='text-4xl font-bold text-white' >15<span style={{ "color": "#FF9903" }}>+</span> </h1>
    <p className='text-white font-bold' >Data-driven<br />Strategies</p>
  </div>
</div>

<div className='flex  faded-right-animation' >
<button style={{  backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}}   className="mr-4 w-full md:w-auto text-white font-bold py-2 px-4 rounded-full mb-4 md:mr-2">
Get A Quote
            </button>
            <button style={{ background: '#FF9903' }} className="w-full md:w-auto text-white font-bold py-2 px-4 rounded-full mb-4 md:mr-2">
            +1 (773) 312 4788
            </button>
</div>
</div>


    </div>
  )
}

export default Scaling_Mid_Sec