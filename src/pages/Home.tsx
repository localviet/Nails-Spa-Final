import Navbar from '../components/navbar';
import Reviews from '../components/reviews';
import Booking from '../components/booking';
import Footer from '../components/footer';
import banner from '../assets/front page/banner.png';
import { Helmet } from "react-helmet";

export default function Home() {

  return (
    <>
      <Helmet>
        <title>Nails Spa</title>
      </Helmet>
      <div className="min-w-screen min-h-screen bg-white overflow-x-hidden">
        <Navbar />
        
        <div className='relative w-full h-160'>
          <img src={banner} alt="shop" className='w-full h-full object-cover filter brightness-50' />
          <div className='absolute inset-0 flex flex-col items-center justify-center'>
            <h1 className='text-4xl md:text-6xl lg:text-7xl text-white font-bold'>Welcome to #1 Nails & Spa</h1>
            <p className='text-2xl mt-2'>Where Nail Artistry Meets Relaxation</p>
            <a href="#booking">
              <button className="bg-primary text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-phover transition-colors mt-8">
                Book A Visit
              </button>
            </a>
          </div>
        </div>

        <Booking />

        <div id='reviews' className='flex text-black bg-gray-100 w-full py-10 justify-center items-center flex-col space-y-6'>
            <div className='flex flex-col items-center space-y-2'>
              <h1 className='text-4xl'>What Our Clients Say</h1>
              <p>Hear from our happy customers about their experience with #1 Nails & Spa</p>
            </div>
            <Reviews />
        </div>

        <Footer />
      </div>
    </>
  );
}