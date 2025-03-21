import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

export const Enquire = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const navigate =useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        requirement: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            from_phone: formData.phone,
            requirement: formData.requirement,
            message: formData.message
        };

        emailjs.send(
            'service_1qawa3s', 
            'template_1c79hsj', 
            templateParams,
            'bxKrI6moY7XtsyEHY'
        )
        .then((response) => {
            console.log('Email successfully sent!', response);
            setFormData({
                name: '',
                email: '',
                phone: '',
                requirement: '',
                message: ''
            });
            alert('Your enquiry has been submitted successfully!');
        })
        .catch((err) => {
            console.error('Failed to send email:', err);
            setSubmitError('Failed to send your enquiry. Please try again later.');
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
         
            <div className="fixed text-black inset-0 bg-black bg-opacity-50 flex items-center mt-10 justify-center z-50">
                <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                    <div className="flex justify-between items-center mb-6">
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700">Name *</label>
                            <input type="text" id="modal-name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-3 py-2 border rounded-md" placeholder="Your Name"/>
                        </div>
                        <div>
                            <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700">Email *</label>
                            <input type="email" id="modal-email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-3 py-2 border rounded-md" placeholder="your.email@example.com"/>
                        </div>
                        <div>
                            <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700">Phone *</label>
                            <input type="tel" id="modal-phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-3 py-2 border rounded-md" placeholder="Your Phone Number"/>
                        </div>
                        <div>
                            <label htmlFor="requirement" className="block text-sm font-medium text-gray-700">Requirement *</label>
                            <select id="requirement" name="requirement" value={formData.requirement} onChange={handleInputChange} required className="w-full px-3 py-2 border rounded-md">
                                <option value="">Select your requirement</option>
                                <option value="Industrial Shutters">Industrial Shutters</option>
                                <option value="Sliding Gates">Sliding Gates</option>
                                <option value="Fire Gates">Fire Gates</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows="4" className="w-full px-3 py-2 border rounded-md" placeholder="Please provide additional details..."></textarea>
                        </div>

                        {submitError && (
                            <div className="bg-red-50 p-4 rounded-md">
                                <h3 className="text-sm font-medium text-red-800">Error</h3>
                                <p className="text-sm text-red-700">{submitError}</p>
                            </div>
                        )}

                        <div className="flex justify-end space-x-3 mt-6">
                            <button type="button" onClick={() => navigate('/')} className="px-4 py-2 border rounded-md bg-gray-50">Cancel</button>
                            <button type="submit" className="px-4 py-2 rounded-md bg-orange-500 text-white flex items-center justify-center" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    'Submit Enquiry'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        
    );
};
