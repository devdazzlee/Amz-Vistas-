import React, { useEffect } from 'react';
import './Banner_Contact.css';
import '../../../Components/Animation.css'
import { Link } from 'react-router-dom';
import img from '../../../Images/svgexport-1.svg'
const Banner_Contact = () => {
  return (
    <div  style={{"background" : "#232F3F" ,  paddingTop : "40px"}} className='main-banner h-auto'>

      <div className="w-full container mx-auto md:px-6">
        <div className="flex flex-col md:flex-row justify-between  items-center py-6 md:py-24 animation-from-left">

        <div   className=" md:mt-0  mt-11 fade-up-element mb-10 w-full md:w-7/12 px-6 md:px-3 lg:px-6">

            <h2 className="mb-6 text-3xl text-white font-bold">
              <span className='mb-6'>CONTACT US TO</span> <br /> UNLOCK  & E-COMMERCE<br /> SUCCESS!</h2>
            <h2 style={{ "color": "#FF9903" }} className="mb-6 text-xl font-bold">Amazon Store Set-up & Management</h2>
            <p className="mb-6 text-white  ">
            Are you looking for top-of-the-line E-Commerce and Amazon services? we have got you covered, Speak  to our experts  today to acquire our services
            </p>

            <Link to={'/Contact-us'} >

<button   style={{  backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} className="neon-button w-full md:w-auto  text-white font-bold py-2 px-4 rounded-full mb-4 md:mr-2">
  Live Chat
</button>
</Link>
            <button   style={{  backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} className="neon-button w-full md:w-auto  text-white font-bold py-2 px-4 rounded-full">
              +1 (737) 295-1375
            </button>
          </div>

          <div  className='fade-up-element w-full md:w-1/3  md:ml-6 mb-16'>
            <img src={img} alt="Contact Service - Amzvistas" />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Banner_Contact;
