import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import '../../../Components/Animation.css';
import axios from 'axios';

const Contact_Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    textarea: '',
  });

  const [isChecked, setIsChecked] = useState({
    consent1: false,
    consent2: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setIsChecked((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!formData.name || !formData.email || !formData.textarea) {
      alert('Please fill out all fields before submitting.');
      return;
    }
    if (!isChecked.consent1 || !isChecked.consent2) {
      alert('Please provide consent by checking both boxes before submitting.');
      return;
    }

    setIsLoading(true);

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
      });
      setIsChecked({
        consent1: false,
        consent2: false,
      }); // Reset checkboxes
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const cards1 = document.querySelectorAll('.elevated-animate-bottom');
    const cards2 = document.querySelectorAll('.leftCardAnimation');
    const cards3 = document.querySelectorAll('.rightCardAnimation');

    const handleScroll = () => {
      cards1.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-up-element'); // Apply animation for class1
        }
      });

      cards2.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('element-to-animate'); // Apply animation for class2
        }
      });
      cards3.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-from-right'); // Apply animation for class3
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
      <section id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <h2
                style={{ color: '#232F3F' }}
                className="elevated-animate-bottom font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl"
              >
                Get in Touch
              </h2>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="leftCardAnimation h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                  In the dynamic world of online shopping, being a strategic master of Amazon's vast landscape means being more than merely present. Here's where our agency really shines. We are committed to enabling companies by providing them with an array of all-inclusive Amazon services that will enable them to achieve previously unattainable levels of success in the ever-changing digital marketplace. Our dedication goes beyond business dealings.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="backgroundcolor-yellow flex h-10 w-10 items-center justify-center rounded text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address</h3>
                      <p className="text-gray-600 dark:text-slate-400">5900 Balcones Drive STE 100</p>
                      <p className="text-gray-600 dark:text-slate-400">Austin, TX 78731</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="backgroundcolor-yellow flex h-10 w-10 items-center justify-center rounded text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact</h3>
                      <p className="text-gray-600 dark:text-slate-400">Mobile: +1 (737) 295-1375</p>
                      <p className="text-gray-600 dark:text-slate-400">Mail: contact@amzvistas.com</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rightCardAnimation card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 style={{ color: '#232F3F' }} className="mb-4 text-2xl font-bold">Ready to hit the Road?</h2>
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="given-name"
                      placeholder="Your name"
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <input
                      type="email"
                      id="email"
                      autoComplete="email"
                      placeholder="Your email address"
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      value={formData.textarea}
                      onChange={handleInputChange}
                    ></textarea>
                    <div className="flex items-start">
                      <input
                        className="block mt-1 mr-2"
                        type="checkbox"
                        name="consent1"
                        checked={isChecked.consent1}
                        onChange={handleCheckboxChange}
                      />
                      <p className="font-semibold block text-start text-sm">
                        By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message & data rates may apply. You can reply STOP to opt-out of further messaging.
                      </p>
                    </div>
                    <div className="flex items-start my-2">
                      <input
                        className="block mt-1 mr-2"
                        type="checkbox"
                        name="consent2"
                        checked={isChecked.consent2}
                        onChange={handleCheckboxChange}
                      />
                      <p className="font-semibold block xl:w-72 text-start text-sm">
                        I consent to receive SMS/MMS messages from Amz Vistas
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    {isLoading ? (
                      <div className="flex justify-center items-center">
                        <Circles
                          height="30"
                          width="30"
                          color="#ffffff"
                          ariaLabel="circles-loading"
                          visible={true}
                        />
                      </div>
                    ) : (
                      <button
                        type="submit"
                        className="backgroundcolor-yellow w-full text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                      >
                        Send Message
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact_Form;
