import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import bg from "../assets/Contact.png";
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Trigger animation when component mounts
  useEffect(() => {
    setTitleVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    // EmailJS configuration
    const serviceId = 'service_1qawa3s';
    const templateId = 'template_1c79hsj';
    const userId = 'bxKrI6moY7XtsyEHY';

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email successfully sent!', response);
        setFormData({ name: '', email: '', message: '' });
        alert('Your message has been sent successfully!');
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        setSubmitError('Failed to send your message. Please try again later.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with background image */}
      <div className="w-full h-screen flex-shrink-0 relative">
        <img
          src={bg}
          alt="Business collaboration"
          className="w-full h-full object-cover"
        />

        {/* Animated Title */}
        <div className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full">
          <h2
            className={`text-white text-3xl md:text-4xl lg:text-5xl font-bold px-6 py-4 
               bg-opacity-20 border-none relative overflow-hidden text-center
               ${titleVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
          >
            {/* Animated background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 animate-pulse opacity-50"></div>
            <span className="relative z-10">Let's Connect</span>
          </h2>
        </div>
      </div>

      {/* Main content section with negative margin to overlap */}
      <div className="-mt-32 relative z-10">
        <main className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-b-lg shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Left Column - Contact Form */}
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>

                {/* Contact Information */}
                <div className="space-y-4 mb-8">
                  <ContactInfo
                    icon={<Mail className="w-5 h-5 text-orange-500 mt-1 mr-3" />}
                    title="Email"
                    content="gujaratrollingshutter2525@gmail.com"
                  />

                  <ContactInfo
                    icon={<Phone className="w-5 h-5 text-orange-500 mt-1 mr-3" />}
                    title="Phone"
                    content="+91 9427877196"
                  />

                  <ContactInfo
                    icon={<Clock className="w-5 h-5 text-orange-500 mt-1 mr-3" />}
                    title="Business Hours"
                    content="Monday - Saturday: 9AM - 7PM"
                  />
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <FormField
                    id="name"
                    name="name"
                    type="text"
                    label="Name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="text-black placeholder-gray-500"
                  />

                  {/* Email Field */}
                  <FormField
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="text-black placeholder-gray-500"
                  />

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message"
                      className="mt-1 block w-full text-black placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm p-2 border"
                      required
                    ></textarea>
                  </div>

                  {/* Error Message Display */}
                  {submitError && (
                    <div className="rounded-md bg-red-50 p-4">
                      <div className="flex">
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-red-800">Error</h3>
                          <p className="text-sm text-red-700">{submitError}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>

              </div>

              {/* Right Column - Company Location */}
              <div className="md:w-1/2 bg-gray-100">
                <div className="h-64 bg-gray-300">
                  {/* Map integration */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3706.7505117428614!2d72.9723928!3d21.7124112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be027f9bbeefa71%3A0x9b305eafe172f730!2sGujarat%20Rolling%20Shutter!5e0!3m2!1sen!2sin!4v1741080668444!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Company location"
                  />
                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Location</h2>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-orange-500 mt-1 mr-3" />
                      <div>
                        <p className="font-medium text-gray-700">Address</p>
                        <address className="not-italic text-gray-600">
                          Shalimar Complex,<br />
                          3, Dahej Bypass Rd, <br />
                          near Sherpura, Madina Park, Bharuch,<br />
                          Gujarat 392015
                        </address>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-2">Nearby landmarks</h3>
                      <ul className="list-disc list-inside text-gray-600">
                        <li>Central Park (0.3 miles)</li>
                        <li>Business District Shopping Center (0.5 miles)</li>
                        <li>Grand Hotel (0.7 miles)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Helper components for better organization
const ContactInfo = ({ icon, title, content }) => (
  <div className="flex items-start">
    {icon}
    <div>
      <p className="font-medium text-gray-700">{title}</p>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const FormField = ({ id, name, type, label, value, onChange, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 border"
      required={required}
    />
  </div>
);

export default ContactPage;