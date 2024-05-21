import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import CardSlider from '../../Components/CardSlider/CardSlider'
import Inventer from '../../Components/INVENTOR/Inventer'
import Upsclaing from '../../Components/Upscaling/Upsclaing'
import Advertising from '../../Components/Advertising/Advertising'
import Support_Slider from '../../Components/Support_Card_Slider/Support_Slider'
import Faq from '../../Components/FAQS/FAQ'
import ContactDiv from '../../Components/Contact_Div/ContactDiv'
import Supporter from '../../Components/Supporter/Supporter'
import Footer from '../../Components/Footer/Footer'
import Services_Card_New from '../../Components/Services_Cards_New/Services_Card_new'
import SliderCarousel from '../../Components/Services_Cards_New/SliderCarousel'
import Services_Card_New2 from '../../Components/Services_Cards_New/Services_Card_new2'
import video from '../../Images/website banner.mp4'
import './Home.css'
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import BasicModal from '../../Components/Modal/Modal';
import { InlineWidget } from 'react-calendly';

const Home = () => {
  const [hidden,setHidden] = useState(false)
  const [hidden2,setHidden2] = useState(false)
  const [showPopup, setShowPopup] = useState(false);
  const [showOnScroll, setShowOnScroll] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(true);


  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/6622b44ea0c6737bd12e4018/1hrrp0l2r';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();



    useEffect(() => {
      if (showPopup) {
        const timeout = setTimeout(() => {
          setShowPopup(false);
        }, 5000);
  
        return () => clearTimeout(timeout);
      }
    }, [showPopup]);
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        // Adjust the scroll threshold as needed
        const scrollThreshold = 200; // Adjust this value as needed
    
        if (scrollPosition > scrollThreshold) {
          setShowOnScroll(true);
        } else {
          setShowOnScroll(false);
        }
      };
    
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      textarea: '',
      number : ''
    });
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Validate form inputs
      if (!formData.name || !formData.email ||!formData.number ||  !formData.textarea) {
        alert('Please fill out all fields before submitting.');
        return;
      }
  
  
      // Process the form submission logic here
      console.log('Form submitted:', formData);
  
      try {
        // Make API call using Axios
        const response = await axios.post('https://agreeable-apron-bass.cyclic.app/api/messages', formData);
        console.log('API response:', response.data);
        // Handle success (optional)
        alert('Your Message has been successfully sent!');
        setHidden2(false)
  
        setFormData({
          name: '',
          email: '',
          textarea: '',
          number: '',
        });  
  
      } catch (error) {
        console.error('Error sending message:', error);
        alert('There was an error sending your message. Please try again later.');
      }
    };
  useEffect(() => {
    const videoElement = document.getElementById('background-video');
    if (videoElement) {
      videoElement.play().catch((error) => {
        // Autoplay was prevented. Handle the error, e.g., show a play button.
        console.error('Autoplay prevented:', error);
      });
    }
  }, []);

  const handleHover = () => {
      setHidden(true);
    };

    const handleHoverOut = () => {
      setHidden(false);
    };

    const handleHover2 = () => {
      setHidden2(true);
    };

    const handleHoverOut2 = () => {
      setHidden2(false);
    };
  return (
    <>
<Helmet>
  <title>AmzVistas - Your Amazon Services Partner</title>
  <link rel="canonical" href="https://amzvistas.com" />
  <meta name="description" content="AmzVistas offers comprehensive Amazon services including store creation, customization, product listing optimization, management, analytics, and expert guidance for a successful online presence." />
  <meta name="keywords" content="Amazon store creation, storefront customization, product listing optimization, store management, Amazon analytics, e-commerce services" />
</Helmet>

      <Navbar />

      <video id="background-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
    
      </video>
<Banner />
<div  className='bg-white'  >

    <div   className='py-12' >
    <SliderCarousel/>
    </div>
    <div
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        onClick={() => setHidden(!hidden)}
        className={`text-14xl p-4 text-white flex items-center`}
        style={{
    background :"linear-gradient(rgb(250, 152, 0) 0%, rgb(223, 123, 1) 100%)",
          position: "fixed",
          right: "0px",
          bottom: "400px",
          zIndex: "1",
          borderRadius: "10px 0px 0px 10px"
        }}
      >
        <i className="fa-solid fa-phone mr-2"></i>
        {hidden ? (
          <>
            <hr style={{ width: "1px", height: "20px", margin: "0 10px", border: "none", backgroundColor: "black" }} />
            <a className="font-bold" href="tel:+17372951375">+1 (737) 295-1375</a>
          </>
        ) : ''}
      </div>
      <div
        onMouseEnter={handleHover2}
        onMouseLeave={handleHoverOut2}
        onClick={() => setHidden2(!hidden2)}
        className={`text-14xl p-4 text-white flex items-center`}
        style={{
    background :"linear-gradient(rgb(250, 152, 0) 0%, rgb(223, 123, 1) 100%)",
          position: "fixed",
          right: "0px",
          bottom: "340px",
          zIndex: "1",
          borderRadius: "10px 0px 0px 10px"
        }}
      >
        <i className="fas fa-comments "></i>
        {hidden2 ? (
          <>
            <hr style={{ width: "1px", height: "20px", margin: "0 10px", border: "none", backgroundColor: "black" }} />
              <Link    to={'/Contact-us'} > 
            <a className="font-bold">
              
            Let's Discuss
            </a>
            </Link>
          </>
        ) : ''}
      </div>
      {showRequestForm && (
            <div style={{ color: "red" }}>
                <BasicModal />
            </div>
        )}

      <Inventer />
      <Upsclaing />
      <Advertising />
      <Faq />
      <ContactDiv />
      <div   className='my-12' >

<h1  className='Animate-from-bottom main-center-text-rtf text-2xl sm:text-2xl md:text-4xl my-2 font-bold md:text-center sm:text-left ' >Signup To Maximize Your Sales</h1>

      <InlineWidget url="https://calendly.com/ahmed-radiantcortex/30min" />
    </div>

      {/* <Supporter /> */}
      <Footer />
</div>
    </>
  )
}

export default Home