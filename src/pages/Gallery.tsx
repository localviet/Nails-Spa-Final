import * as React from 'react';
import { Component } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


export default function Gallery() {

    return (
        <div className='min-w-screen min-h-screen bg-white overflow-x-hidden'>
            <Navbar />
            <div className="container mx-auto px-4 py-8 h-screen">
                <h1 className="text-3xl font-bold mb-6">Gallery</h1>
                <p className="text-gray-700 mb-4">Explore our beautiful nail art and spa services.</p>
                {/* Gallery content goes here */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Example images */}
                    <img src="/images/nail1.jpg" alt="Nail Art 1" className="w-full h-auto rounded-lg shadow-md" />
                    <img src="/images/nail2.jpg" alt="Nail Art 2" className="w-full h-auto rounded-lg shadow-md" />
                    <img src="/images/nail3.jpg" alt="Nail Art 3" className="w-full h-auto rounded-lg shadow-md" />
                </div>
            </div>
            <Footer />
        </div>
    )
}