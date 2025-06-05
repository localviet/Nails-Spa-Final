import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  title: string;
  company: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Julianne Datuin",
    rating: 5,
    text: "Absolutely fantastic service! The team went above and beyond to meet our needs. I couldn't be happier with the results.",
    title: "Young Client",
    company: "Young Client"
  },
  {
    id: 2,
    name: "Carmen Rodriguez",
    rating: 5,
    text: "I’m so happy with the service. Everybody here is so patient with me and they listen to all of my design needs and they are so fast.",
    title: "Google Reviewer",
    company: "InnovateLab"
  },
  {
    id: 3,
    name: "Sarah Pearson",
    rating: 4,
    text: "Fast, friendly, fair priced and great quality. This is my first time coming to this nail shop, and I popped in because it was convenient. I'll be coming back.",
    title: "New Client",
    company: "DesignStudio"
  },
  {
    id: 4,
    name: "Sheronda Hagines",
    rating: 5,
    text: "Please go and experience them for yourself. I a very picky person when it come to my eyebrows, nails, and pedicure. I gave them a try despite the reviews and must say they passed with all three.",
    title: "Longtime Customer",
    company: "StartupHub"
  }
];

export default function RotatingReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 md:w-5 md:h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-6 md:py-16 bg-gray-100 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-3 md:px-6">


        <div 
          className="relative overflow-hidden w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Review Cards Container */}
          <div 
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="w-full flex-shrink-0 px-1 md:px-4"
              >
                <div className="bg-white rounded-lg shadow-lg p-3 md:p-8 mx-auto max-w-xs md:max-w-2xl min-h-0">
                  {/* Stars */}
                  <div className="flex justify-center mb-2 md:mb-4">
                    {renderStars(review.rating)}
                  </div>
                  
                  {/* Review Text */}
                  <blockquote className="text-gray-700 text-xs md:text-lg text-center mb-3 md:mb-6 italic leading-relaxed px-1">
                    "{review.text}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 text-xs md:text-base">
                      {review.name}
                    </div>
                    <div className="text-gray-600 text-xs md:text-sm">
                      {review.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 md:left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-md hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-3 h-3 md:w-6 md:h-6 text-gray-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 md:right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-md hover:bg-gray-50 transition-colors z-10"
            aria-label="Next review"
          >
            <ChevronRight className="w-3 h-3 md:w-6 md:h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 md:mt-8 space-x-1.5 md:space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-blue-600'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-rotation indicator - hidden on mobile */}
        <div className="hidden md:block text-center mt-4 text-sm text-gray-500">
          {isPaused ? 'Paused' : 'Auto-rotating every 2 seconds'}
        </div>
      </div>
    </section>
  );
}