/* eslint-disable */

import React from 'react';
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

const ContactCard = () => {
    return (
        <div className="overflow-hidden p-6 xl:px-96">
            <div>
                <p className="text-gray-700 mb-4">
                    Do you have any questions, suggestions, or just want to say hi? We'd love to hear from you! Whether you're a long-time cat enthusiast or just starting to appreciate the wonders of cats, the UNSW Cat Appreciation Society is here to connect and support our community.
                </p>
                <p className="text-gray-700 mb-4">
                    Feel free to reach out to us using the contact form below, and we'll get back to you as soon as possible.
                </p>
                <h3 className="text-xl font-semibold mb-2">Get In Touch</h3>
                <div className="flex items-center mb-4">
                    <p className="text-gray-700">For any general inquiries or specific questions, you can reach us at <a href="mailto:unswcatsoc@gmail.com" className="text-[#FFBA00]">unswcatsoc@gmail.com</a>.</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-2">Social Media:</h4>
                    <div className="flex space-x-4 mb-4">
                        <a href="https://www.facebook.com/unswcatsoc" target="_blank" rel="noopener noreferrer" className="text-[#FFBA00]">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://www.instagram.com/unswcatsoc" target="_blank" rel="noopener noreferrer" className="text-[#FFBA00]">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://www.tiktok.com/@unswcatsoc" target="_blank" rel="noopener noreferrer" className="text-[#FFBA00]">
                            <FaTiktok size={24} />
                        </a>
                        <a href="https://discord.com/invite/9WEAJ47NtD" target="_blank" rel="noopener noreferrer" className="text-[#FFBA00]">
                            <FaDiscord size={24} />
                        </a>
                        <a href="https://www.linkedin.com/company/unswcatsoc" target="_blank" rel="noopener noreferrer" className="text-[#FFBA00]">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Address</h3>
                <p className="text-gray-700">
                    UNSW Cat Appreciation Society
                    <br />
                    University of New South Wales
                    <br />
                    Sydney, NSW 2052
                    <br />
                    Australia
                </p>
            </div>
        </div>
    );
};

export default ContactCard;
