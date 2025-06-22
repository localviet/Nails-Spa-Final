import { Helmet } from "react-helmet";
import Navbar from '../components/navbar';
import Footer from '../components/footer';


export default function Gallery() {

    return (
        <>
            <Helmet>
                <title>Gallery</title>
            </Helmet>
            <div className='min-w-screen min-h-screen bg-white overflow-x-hidden'>
                <Navbar />
                <div className="container mx-auto px-4 py-4">
                    <h1 className="text-black text-3xl font-bold mb-4">Gallery</h1>
                    <p className="text-gray-700 text-xl">Explore our beautiful nail art and spa services.</p>
                    <p className="text-gray-500 mb-4 text-xl">Courtesy of <a href="#" className="text-blue-500">Our Talented Artists</a></p>
                    {/* Gallery content goes here */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Example images */}
                        <img src="src/assets/gallery/2AA57EF9-155D-4509-A894-7839D82DA3E6.JPEG" alt="Nail Art 1" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="src/assets/gallery/IMG_6710.jpg" alt="Nail Art 2" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="src/assets/gallery/4E3B9806-EB52-42B1-AA45-B1CD247FEAB2.JPEG" alt="Nail Art 3" className="w-full h-auto rounded-lg shadow-md" />

                        <img src="src\assets\gallery\B9DB8A1B-E4A4-4E49-8099-11B88E2AC187.JPEG" alt="Nail Art 1" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="src\assets\gallery\BE5E3089-7EFE-46E2-AA1F-1D368671AFC5.JPEG" alt="Nail Art 2" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="src/assets/gallery/IMG_6419.jpg" alt="Nail Art 3" className="w-full h-auto rounded-lg shadow-md" />

                        <img src="src\assets\gallery\IMG_6640.jpg" alt="Nail Art 3" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="src\assets\gallery\IMG_6769.jpg" alt="Nail Art 3" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="src\assets\gallery\IMG_6817.jpg" alt="Nail Art 3" className="w-full h-auto rounded-lg shadow-md" />

                        <img src="src\assets\gallery\IMG_6824.jpg" alt="Nail Art 3" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="src\assets\gallery\IMG_6825.jpg" alt="Nail Art 3" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="src\assets\gallery\IMG_6831.jpg" alt="Nail Art 3" className="w-full h-auto rounded-lg shadow-md" />

                        <img src="src\assets\gallery\IMG_6916.jpg" alt="Nail Art 3" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="src\assets\gallery\IMG_6922.jpg" alt="Nail Art 3" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="src\assets\gallery\img1.JPEG" alt="Nail Art 3" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}