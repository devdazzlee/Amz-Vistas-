import {React , useEffect} from 'react'
import { Link } from 'react-router-dom';
import image1 from '../../Images/servcs-bnr-side-img26.png'
const Amazon_PPC_Card = () => {



  useEffect(() => {
    const cards1 = document.querySelectorAll('.right-side');
    const cards2 = document.querySelectorAll('.left-side');
  
    const handleScroll = () => {
      cards1.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-from-right'); // Apply animation for class1
        }
      });
  
      cards2.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('element-to-animate'); // Apply animation for class2
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
      <div>

<div className="w-full container mx-auto md:px-6">
  <div className="flex flex-col md:flex-row justify-between pt-10 animation-from-left">

  <div className='mt-20 md:mt-0 right-side w-full md:w-1/3 pt-4 md:ml-6 rounded-2xl'>
      <img
        src={image1}
        alt="Amazon PPC - Amzvistas"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>

    <div className="left-side mb-10 w-full md:w-7/12 px-6 md:px-3 lg:px-6">
      <h2 className="mb-6 text-3xl text-black font-bold">
        <span className='mb-6'>AMAZON DIGITAL MARKETING</span></h2>
      <p className="mb-6 text-black dark:text-neutral-300">
      Campaigns change over time, with the prior turning obsolete. Our routine includes keeping track of those developments and adjusting to them. Our Amazon digital marketing experts base their marketing strategies on outcome-driven and data-supported methodologies in order to keep expenses in check and manage bids for the best outcomes.
      </p>

      <div className='flex mt-2 flex-wrap text-black w-3/4	mb-4 justify-between' >
           <ul>
              <li   className='mb-2' ><i style={{color: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i> Product keywords</li>
              <li   className='mb-2' ><i style={{color: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Ad strategy</li>
              <li   className='mb-2' ><i style={{color: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Ad creation</li>

            </ul>
            <ul>
            <li   className='mb-2' ><i style={{color: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Campaign set-up</li>
            <li   className='mb-2' ><i style={{color: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Campaign management</li>
            </ul>
           </div>
        


        <Link to={'/Contact-us'} >

<button   style={{  backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} className="neon-button w-full md:w-auto  text-white font-bold py-2 px-4 rounded-full mb-4 md:mr-2">
  neon-butto n
</button>
</Link>
      <button style={{  backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} className="neon-button w-full md:w-auto text-white font-bold py-2 px-4 rounded-full">
              +1 (737) 295-1375
            </button>
    </div>

   

  </div>
</div>

</div>
    </>
  )
}

export default Amazon_PPC_Card