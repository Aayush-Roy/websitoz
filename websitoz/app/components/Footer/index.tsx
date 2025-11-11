import Link from 'next/link';
import React from 'react';

// Quick links data used by the footer
const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services-section" },
    { name: "About Us", href: "#aboutus-section" },
    { name: "FAQ", href: "#faq-section" },
    { name: "Blog", href: "#blog-section" },
];

// --- SVG Icons (Consistent 20x20 size within w-9 h-9 container) ---

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.218 0-4.192 1.58-4.192 4.615v1.385z"/>
    </svg>
);
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.164-2.722-.951.564-2.005.974-3.133 1.268-1.001-1.071-2.434-1.74-4.01-1.74-3.818 0-6.913 3.1-6.913 6.912 0 .54.062 1.065.176 1.571-5.748-.288-10.835-3.045-14.24-7.224-.593 1.018-.94 2.196-.94 3.468 0 2.396 1.289 4.51 3.243 5.748-.95-.03-1.84-.291-2.623-.728.002.028.002.057.002.085 0 3.35 2.387 6.138 5.57 6.772-.584.159-1.2.23-1.82.23-.446 0-.879-.044-1.303-.124.896 2.775 3.473 4.78 6.54 4.834-2.36 1.85-5.32 2.955-8.551 2.955-.561 0-1.112-.033-1.65-.098 3.068 1.96 6.704 3.104 10.518 3.104 12.624 0 19.53-10.435 19.53-19.53 0-.297-.006-.593-.014-.888.802-.577 1.499-1.293 2.055-2.118z"/>
    </svg>
);
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.069-4.849.148-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.201-6.78 2.618-6.981 6.981-.058 1.281-.072 1.689-.072 4.948 0 3.259.014 3.668.072 4.948.201 4.357 2.627 6.78 6.981 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.201 6.78-2.618 6.979-6.981.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.981-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.536 1.536 0 1 0 0 3.072 1.536 1.536 0 0 0 0-3.072z"/>
    </svg>
);


const Footer = () => {
    return (
        <footer className="bg-black text-white rounded-t-2xl overflow-hidden mt-12">
            {/* Top Footer Content */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
                    
                    {/* Column 1 - Logo & Social */}
                    <div className="lg:col-span-3">
                        <h3 className="text-3xl font-semibold mb-6">Websitoz</h3>

                        <div className="flex gap-4 items-center">
                            {/* Facebook Icon */}
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <div className="w-9 h-9 flex items-center justify-center bg-gray-900 rounded-lg hover:scale-110 transition-transform text-white shadow-md">
                                    <FacebookIcon />
                                </div>
                            </a>

                            {/* Twitter Icon */}
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <div className="w-9 h-9 flex items-center justify-center bg-gray-900 rounded-lg hover:scale-110 transition-transform text-white shadow-md">
                                    <TwitterIcon />
                                </div>
                            </a>

                            {/* Instagram Icon */}
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <div className="w-9 h-9 flex items-center justify-center bg-gray-900 rounded-lg hover:scale-110 transition-transform text-white shadow-md">
                                    <InstagramIcon />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div className="lg:col-span-3 mt-8 sm:mt-0">
                        <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400 text-center md:text-left">
                        © 2025 - All Rights Reserved by{" "}
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white font-semibold">
                            websitoz.in
                        </a>
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white text-sm">
                            Privacy Policy
                        </a>
                        <Link
                            href="/"
                            className="text-gray-400 hover:text-white text-sm border-l border-gray-700 pl-4"
                        >
                            Terms & Conditions
                        </Link>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
