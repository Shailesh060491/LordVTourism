import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ImageWithFallback from '../components/ImageWithFallback';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      fallback: 'https://via.placeholder.com/2000x1000/7C3AED/FFFFFF?text=Himalayan+Mountains',
      title: 'Majestic Himalayas',
      subtitle: 'Discover the breathtaking beauty of mountain peaks'
    },
    {
      url: 'https://images.unsplash.com/photo-1544551763-46a013bb2dcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      fallback: 'https://via.placeholder.com/2000x1000/10B981/FFFFFF?text=Tropical+Beaches',
      title: 'Pristine Beaches',
      subtitle: 'Relax on the golden sands of India\'s coastline'
    },
    {
      url: 'https://images.unsplash.com/photo-1583417319078-c4a8c2b0a8a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      fallback: 'https://via.placeholder.com/2000x1000/059669/FFFFFF?text=Serene+Backwaters',
      title: 'Kerala Backwaters',
      subtitle: 'Experience the tranquil beauty of nature'
    }
  ];

  const popularDestinations = [
    {
      name: 'Himalayan Peaks',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallback: 'https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Himalayan+Peaks',
      description: 'Majestic mountain ranges and pristine landscapes.'
    },
    {
      name: 'Goa Beaches',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb2dcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallback: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Goa+Beaches',
      description: 'Sun, sand, and sea - perfect for a tropical getaway.'
    },
    {
      name: 'Kerala Backwaters',
      image: 'https://images.unsplash.com/photo-1583417319078-c4a8c2b0a8a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallback: 'https://via.placeholder.com/400x300/059669/FFFFFF?text=Kerala+Backwaters',
      description: 'Serene waterways and lush green landscapes.'
    },
    {
      name: 'Ladakh Mountains',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallback: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Ladakh+Mountains',
      description: 'High-altitude desert with stunning landscapes.'
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const travelPackages = [
    {
      name: 'Himalayan Adventure',
      duration: '8 Days',
      price: '₹65,000',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallback: 'https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Himalayan+Adventure'
    },
    {
      name: 'Beach Paradise',
      duration: '5 Days',
      price: '₹35,000',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb2dcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallback: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Beach+Paradise'
    },
    {
      name: 'Kerala Backwaters',
      duration: '6 Days',
      price: '₹40,000',
      image: 'https://images.unsplash.com/photo-1583417319078-c4a8c2b0a8a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallback: 'https://via.placeholder.com/400x300/059669/FFFFFF?text=Kerala+Backwaters'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      text: 'Amazing experience! The team made our Rajasthan trip unforgettable.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      location: 'Bangalore',
      text: 'Excellent service and well-planned itinerary. Highly recommended!',
      rating: 5
    },
    {
      name: 'Anita Singh',
      location: 'Delhi',
      text: 'The Kerala backwaters tour was magical. Perfect for a family vacation.',
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      icon: '🏆',
      title: 'Expert Guides',
      description: 'Local experts with deep knowledge of destinations'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Competitive pricing with no hidden costs'
    },
    {
      icon: '🛡️',
      title: 'Safe Travel',
      description: '24/7 support and safety measures'
    },
    {
      icon: '⭐',
      title: 'Quality Service',
      description: '5-star rated experiences and customer satisfaction'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen Carousel */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={heroImages[currentSlide].url}
              fallbackSrc={heroImages[currentSlide].fallback}
              alt={heroImages[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-gradient" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 h-full flex items-center justify-center text-center text-white px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 text-gradient"
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {heroImages[currentSlide].title}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-3xl mb-8 max-w-3xl mx-auto"
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {heroImages[currentSlide].subtitle}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/destinations" className="btn-primary text-lg px-8 py-4">
                Explore Destinations
              </Link>
              <Link to="/packages" className="btn-secondary text-lg px-8 py-4">
                View Packages
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Carousel Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover India's most iconic and breathtaking destinations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDestinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={destination.image}
                    fallbackSrc={destination.fallback}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <Link
                    to="/destinations"
                    className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Travel Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Carefully crafted itineraries for the perfect Indian adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {travelPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={pkg.image}
                    fallbackSrc={pkg.fallback}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">{pkg.duration}</span>
                    <span className="text-2xl font-bold text-primary-600">{pkg.price}</span>
                  </div>
                  <Link to="/packages" className="btn-primary w-full text-center block">
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing you with the best travel experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Travelers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from our satisfied customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
