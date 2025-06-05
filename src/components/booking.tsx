import { Phone, Clock, MapPin } from 'lucide-react';


export default function Booking() {


    return(
        <div id='booking' className='flex flex-col items-center justify-center mt-10 space-y-6 w-full pb-10'>
            <div>
                <h1 className='text-black text-4xl font-bold mb-8'>Book Your Apointment</h1>
            </div>

            <div className='flex flex-col text-black w-9/10 md:w-1/2 border-2 border-gray-300 rounded-lg shadow-md bg-white py-6'>
                <div>
                    <h2 className='text-2xl text-primary font-bold'>Call to Book</h2>
                    <p className='text-gray-500'>To schedule your appointment, please call us directly</p>
                </div>
                <div className='font-bold '>
                    <a href="tel:7573133670" className='flex items-center justify-center text-primary text-4xl hover:text-phover transition-colors py-2'>
                    <Phone className='mr-2' />
                    <span className=''>(757) 313-3670</span>
                    </a>
                </div>
                <div>
                    <p className='text-gray-500'>Our friendly staff will help you choose the perfect service and find a time that works for you.</p>
                </div>
            </div>
            
            <div className='flex flex-col w-9/10 md:w-1/2 items-center md:justify-between text-black md:flex-row md:space-y-0 space-y-6'>
                <div className='flex flex-col w-full md:w-10/21 border-2 border-gray-300 rounded-lg shadow-lg p-4 bg-white min-h-35'>
                    <div className='flex items-center space-x-2 text-2xl'>
                    <Clock  className='text-primary'/>
                    <h2 className=' font-bold'>Opening Hours</h2>
                    </div>
                    <div className='flex flex-col space-y-2 mt-2'>
                    <div className='flex justify-between'>
                        <p>Monday - Saturday</p>
                        <p>9:30 AM - 7:30 PM</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Sunday</p>
                        <p>12:00 PM - 5:00 PM</p>
                    </div>
                    </div>
                </div>

                <div className='flex w-full md:w-10/21 border-2 border-gray-300 rounded-lg shadow-lg p-4 bg-white md:min-h-35'>
                    <div>
                    <div className='flex items-center space-x-2 text-2xl'>
                        <MapPin className='text-primary'/>
                        <h2 className='font-bold'>Location</h2>
                    </div>
                    <div className='flex flex-col space-y-2 mt-2'> 
                        <p className='mt-2'>853 E Little Creek Rd., Norfolk, Virginia, 23503</p>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
