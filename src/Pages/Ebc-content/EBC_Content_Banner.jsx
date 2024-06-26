import React, { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Circles } from 'react-loader-spinner';
const   Ebc_Content_Banner = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State to track loading status
  useEffect(() => {
    if (showPopup) {
      const timeout = setTimeout(() => {
        setShowPopup(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [showPopup]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    textarea: '',
    number : ''
  });
  const [isChecked, setIsChecked] = useState({
    consent1: false,
    consent2: false
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setIsChecked(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

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
 if (!isChecked.consent1 || !isChecked.consent2) {
          alert('Please provide consent by checking both boxes before submitting.');
          return;
        }
        setIsLoading(true);
    // Process the form submission logic here
 

    try {
      // Make API call using Axios
      const response = await axios.post('https://amzvistas-backend.vercel.app/api/messages', formData);
      console.log('API response:', response.data);

      // Handle success (optional)
      alert('Your Message has been successfully sent!');

      setFormData({
        name: '',
        email: '',
        textarea: '',
        number: '',
      });  
      setIsChecked({
        consent1: false,
        consent2: false
      }); // Reset checkboxes


    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message. Please try again later.');
    } finally {
      // Set loading to false after form submission is complete
      setIsLoading(false);
    }
  };


  return (
    <div style={{ background: '#232F3F' }} className='main-banner h-auto'>

      <div className="w-full container mx-auto md:px-6">
        <div className="flex flex-col md:flex-row justify-between py-6 md:py-24 animation-from-left items-center">

        <div   className=" md:mt-0  mt-11 fade-up-element mb-10 w-full md:w-7/12 px-6 md:px-3 lg:px-6">

            <h2 className="mb-6 text-3xl text-white font-bold">
              <span className='mb-6'>SMART CONTENT. APPEALING STOREFRONTS.</span></h2>
            <p className="mb-6 text-white  ">
            AMZ Vistas loves storytelling; and at the heart of it, we communicate the stories of each brand through attractive visuals. We actively improve storefronts to capture awareness and eliminate bounce-back rates
            </p>
            <p className="mb-6 text-white  ">
            We combine content and visuals for buyers to make informed decisions, and sellers to quadruple valuable sales.
            </p>
        <Link to={'/Contact-us'} >

<button   style={{  backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} className="neon-button w-full md:w-auto  text-white font-bold py-2 px-4 rounded-full mb-4 md:mr-2">
  Live Chat
</button>
</Link>
            <button style={{ background: '#FF9903' }} className="neon-button w-full md:w-auto text-white font-bold py-2 px-4 rounded-full">
              +1 (737) 295-1375
            </button>
            
          </div>

          <div style={{ "background" : "#FF9903" }} className='fade-up-element w-full md:w-1/3 pt-4 md:ml-6 rounded-2xl'>
          <form className="px-4"   onSubmit={handleSubmit}   >
          <div className='flex flex-col justify-center text-center'>
                <h2 style={{ color: '#000000' }} className="mb-2 text-xl font-bold">Let's discuss your   project</h2>
                <p className="w-full mb-6 text-black  ">
                Increase your Amazon store sales with our proven marketing strategies.

                </p>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
              <input
 type="text"
 id="name"
 autoComplete="given-name"
 placeholder="Full Name"
 className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
 name="name"
 value={formData.name}
 onChange={handleInputChange}
/>

              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                 type="email"
                 id="email"
                 autoComplete="email"
                 placeholder="Email Address"
                 className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                 name="email"
                 value={formData.email}
                 onChange={handleInputChange}
                />
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                 type="Phone Number"
                 id="Phone Number"
                 autoComplete="Phone Number"
                 placeholder="Phone Number"
                 className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                 name="number"
                 value={formData.number}
                 onChange={handleInputChange}
                />
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea

id="textarea"
name="textarea"
rows="3"
placeholder="Write your message..."
className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
value={formData.textarea}
onChange={handleInputChange}

/>
<div className='flex items-start'>
          <input
            className='block mt-1 mr-2'
            type="checkbox"
            name="consent1"
            checked={isChecked.consent1}
            onChange={handleCheckboxChange}
          />
          <p className='font-semibold block  text-start text-sm'>
            By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message & data rates may apply. You can reply STOP to opt-out of further messaging.
          </p>
        </div>

        <div className='flex items-start my-2'>
          <input
            className='block mt-1 mr-2'
            type="checkbox"
            name="consent2"
            checked={isChecked.consent2}
            onChange={handleCheckboxChange}
          />
          <p className='font-semibold block xl:w-72 text-start text-sm'>
            I consent to receive SMS/MMS messages from Amz Vistas
          </p>
        </div>
              </div>

              <button
        type="submit"
        style={{ background: '#000000' }}
        data-te-ripple-init
        data-te-ripple-color="light"
        className="neon-button mb-6 inline-block w-full rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        disabled={isLoading}
      >
        {isLoading ? (
          <Circles
          height="30"
          width="30"
            color="#ffffff"
            ariaLabel="circles-loading"
            wrapperStyle={{ display: 'inline-block' }}
            wrapperClass=""
            visible={true}
          />
        ) : (
          'Get Free Consultation'
        )}
      </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Ebc_Content_Banner;
