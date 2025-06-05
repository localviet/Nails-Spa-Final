import * as React from 'react';
import { Component } from 'react';


export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex md:flex-row flex-col justify-between">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">#1 Nails & Spa</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Building amazing digital experiences that connect people and drive innovation forward.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                <i className="fab fa-facebook-f text-lg"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                <i className="fab fa-twitter text-lg"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                <i className="fab fa-instagram text-lg"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                <i className="fab fa-linkedin-in text-lg"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 flex space-x-4 md:space-x-0 md:flex-col justify-center">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Home</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">About</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Services</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <i className="fas fa-map-marker-alt text-gray-400"></i>
                                <span className="text-gray-300 text-sm">853 E Little Creek Rd., Norfolk, Virginia 23503</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <i className="fas fa-phone text-gray-400"></i>
                                <span className="text-gray-300 text-sm">(757) 313-3670</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <i className="fas fa-envelope text-gray-400"></i>
                                <span className="text-gray-300 text-sm">Norfolknailspa@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-2 pt-2 border-t border-gray-700 flex flex-col md:flex-row md:items-center md:justify-between">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2025 1 Nail & Spa. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}