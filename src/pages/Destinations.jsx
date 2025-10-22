import { motion } from 'framer-motion';
import ImageWithFallback from '../components/ImageWithFallback';

const Destinations = () => {
  const destinations = [
    {
      name: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackImage: 'https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Taj+Mahal',
      description: 'The iconic white marble mausoleum, a symbol of eternal love and one of the Seven Wonders of the World.',
      highlights: ['UNESCO World Heritage', 'Sunrise/Sunset Views', 'Mughal Architecture']
    },
    {
      name: 'Goa Beaches',
      location: 'Goa',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb2dcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackImage: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Goa+Beaches',
      description: 'Sun-kissed beaches, vibrant nightlife, and Portuguese heritage make Goa a perfect tropical destination.',
      highlights: ['Beach Activities', 'Water Sports', 'Nightlife']
    },
    {
      name: 'Kerala Backwaters',
      location: 'Kerala',
      image: 'https://images.unsplash.com/photo-1583417319078-c4a8c2b0a8a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackImage: 'https://via.placeholder.com/400x300/059669/FFFFFF?text=Kerala+Backwaters',
      description: 'Serene waterways, lush green landscapes, and traditional houseboats offer a peaceful retreat.',
      highlights: ['Houseboat Stay', 'Ayurveda', 'Spice Plantations']
    },
    {
      name: 'Jaipur - Pink City',
      location: 'Rajasthan',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackImage: 'https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Jaipur+Palace',
      description: 'The royal city of Jaipur with its magnificent palaces, forts, and vibrant culture.',
      highlights: ['Amber Fort', 'City Palace', 'Local Markets']
    },
    {
      name: 'Ladakh',
      location: 'Jammu & Kashmir',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackImage: 'https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Ladakh+Mountains',
      description: 'High-altitude desert with stunning landscapes, Buddhist monasteries, and adventure activities.',
      highlights: ['Pangong Lake', 'Leh Palace', 'Adventure Sports']
    },
    {
      name: 'Varanasi',
      location: 'Uttar Pradesh',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackImage: 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Varanasi+Ghats',
      description: 'The spiritual capital of India, where ancient traditions meet the sacred Ganges River.',
      highlights: ['Ganga Aarti', 'Temples', 'Spiritual Experience']
    },
    {
      name: 'Mysore Palace',
      location: 'Karnataka',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackImage: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Mysore+Palace',
      description: 'The magnificent royal residence showcasing Indo-Saracenic architecture and royal heritage.',
      highlights: ['Palace Illumination', 'Royal History', 'Cultural Heritage']
    },
    {
      name: 'Darjeeling',
      location: 'West Bengal',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackImage: 'https://via.placeholder.com/400x300/06B6D4/FFFFFF?text=Darjeeling+Hills',
      description: 'The Queen of Hills with tea plantations, toy train, and stunning Himalayan views.',
      highlights: ['Tea Gardens', 'Toy Train', 'Himalayan Views']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Explore India's Wonders
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              From the majestic Himalayas to the serene backwaters, discover the diverse beauty 
              and rich heritage of incredible India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Famous Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the most iconic and breathtaking destinations across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
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
                    fallbackSrc={destination.fallbackImage}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {destination.location}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {destination.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full btn-primary">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Explore India?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us help you plan the perfect Indian adventure. Contact us today to start your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Plan My Trip
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                View Packages
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
