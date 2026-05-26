import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer bg-neutral text-neutral-content p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-11/12 mx-auto">

                {/* Contact Info Section */}
                <div>
                    <h6 className="text-xl font-bold mb-4">Contact Info</h6>
                    <ul className="flex flex-col gap-3 text-neutral-content/80">
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-primary" /> moajjem441@gmail.com
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-primary" /> +880 1234 56789000
                        </li>
                        <li className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-primary" /> Dhaka, Bangladesh
                        </li>
                    </ul>
                </div>

                {/* Social Links Section */}
                <div>
                    <h6 className="text-xl font-bold mb-4">Follow Us</h6>
                    <ul className="flex flex-col gap-3">
                        <li><a className="link link-hover flex items-center gap-2"><FaFacebook /> Facebook</a></li>
                        <li><a className="link link-hover flex items-center gap-2"><FaInstagram /> Instagram</a></li>
                        <li><a className="link link-hover flex items-center gap-2"><FaXTwitter /> Twitter</a></li>
                        <li><a className="link link-hover flex items-center gap-2"><FaLinkedin /> LinkedIn</a></li>
                    </ul>
                </div>

                {/* Terms Section */}
                <div>
                    <h6 className="text-xl font-bold mb-4">Terms & Conditions</h6>
                    <ul className="flex flex-col gap-2">
                        <li><a className="link link-hover">Terms of use</a></li>
                        <li><a className="link link-hover">Privacy policy</a></li>
                        <li><a className="link link-hover">Cookie policy</a></li>
                    </ul>
                </div>

                {/* Newsletter/Privacy Section */}
                <div>
                    <h6 className="text-xl font-bold mb-4 tracking-wide text-white">Privacy & Security</h6>
                    <p className="text-sm text-neutral-content/60 leading-relaxed mb-3">
                        We prioritize your privacy. Learn how we handle your data with full transparency and top-tier security standards.
                    </p>
                   
                </div>
            </div>
        </footer>
    );
};

export default Footer;