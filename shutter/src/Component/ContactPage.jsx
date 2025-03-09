import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import bg from "../assets/Contact.png";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Add state for title animation
  const [titleVisible, setTitleVisible] = useState(false);

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
    // Handle form submission logic here
    console.log(formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
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

        {/* Animated Title - Uncommented and implemented */}
        <div className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full">
          <h2
            className="text-white text-3xl md:text-4xl lg:text-5xl font-bold px-6 py-4 
               bg-opacity-20 border-r-4 border-t-4 border-b-4 border-none 
               relative overflow-hidden text-center"
          >
            {/* Animated background gradient effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 
                 animate-pulse opacity-50"
            ></div>
            {/* Title text */}
            <span className="relative z-10">Let's Connect</span>
          </h2>
        </div>

      </div>


      {/* Main content section with negative margin to overlap */}
      <div className="-mt-32 relative z-10">


        {/* Main Content */}
        <main className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-b-lg shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Left Column - Contact Form */}
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>

                {/* Contact Information */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-700">Email</p>
                      <p className="text-gray-600">info@examplecompany.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-700">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-700">Business Hours</p>
                      <p className="text-gray-600">Monday - Friday: 9AM - 5PM</p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 border"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 border"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 border"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 border"
                        required
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* Right Column - Company Location */}
              <div className="md:w-1/2 bg-gray-100">
                <div className="h-64 bg-gray-300">
                  {/* Map placeholder - in a real implementation, you would integrate Google Maps or similar */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3706.7505117428614!2d72.9723928!3d21.7124112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be027f9bbeefa71%3A0x9b305eafe172f730!2sGujarat%20Rolling%20Shutter!5e0!3m2!1sen!2sin!4v1741080668444!5m2!1sen!2sin"
                      width="600"

                      height="300"
                      object-cover
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Location</h2>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-500 mt-1 mr-3" />
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

export default ContactPage;