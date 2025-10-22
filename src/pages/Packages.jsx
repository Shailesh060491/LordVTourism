import { motion } from 'framer-motion';
import ImageWithFallback from '../components/ImageWithFallback';

const Packages = () => {
  const packages = [
    {
      name: 'Golden Triangle Tour',
      duration: '7 Days / 6 Nights',
      price: '₹45,000',
      originalPrice: '₹55,000',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackImage: 'https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Golden+Triangle',
      destinations: ['Delhi', 'Agra', 'Jaipur'],
      highlights: ['Taj Mahal', 'Red Fort', 'Amber Fort', 'City Palace'],
      includes: ['Accommodation', 'Meals', 'Transport', 'Guide', 'Entry Fees'],
      rating: 4.9,
      reviews: 156
    },
    {
      name: 'Kerala Backwaters',
      duration: '5 Days / 4 Nights',
      price: '₹35,000',
      originalPrice: '₹42,000',
      image: 'https://images.unsplash.com/photo-1583417319078-c4a8c2b0a8a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackImage: 'https://via.placeholder.com/400x300/059669/FFFFFF?text=Kerala+Backwaters',
      destinations: ['Kochi', 'Alleppey', 'Munnar'],
      highlights: ['Houseboat Stay', 'Tea Plantations', 'Spice Gardens', 'Ayurveda'],
      includes: ['Houseboat', 'Meals', 'Transport', 'Guide', 'Activities'],
      rating: 4.8,
      reviews: 98
    },
    {
      name: 'Goa Beach Holiday',
      duration: '4 Days / 3 Nights',
      price: '₹25,000',
      originalPrice: '₹30,000',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb2dcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackImage: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Goa+Beach',
      destinations: ['North Goa', 'South Goa'],
      highlights: ['Beach Activities', 'Water Sports', 'Nightlife', 'Portuguese Heritage'],
      includes: ['Beach Resort', 'Meals', 'Transport', 'Water Sports'],
      rating: 4.7,
      reviews: 203
    },
    {
      name: 'Rajasthan Royal Tour',
      duration: '8 Days / 7 Nights',
      price: '₹65,000',
      originalPrice: '₹75,000',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackImage: 'https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Rajasthan+Royal',
      destinations: ['Jaipur', 'Jodhpur', 'Udaipur', 'Jaisalmer'],
      highlights: ['Palace Hotels', 'Desert Safari', 'Forts', 'Cultural Shows'],
      includes: ['Luxury Hotels', 'Meals', 'Transport', 'Guide', 'Cultural Shows'],
      rating: 4.9,
      reviews: 89
    },
    {
      name: 'Himalayan Adventure',
      duration: '6 Days / 5 Nights',
      price: '₹40,000',
      originalPrice: '₹48,000',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackImage: 'https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Himalayan+Adventure',
      destinations: ['Manali', 'Shimla', 'Dharamshala'],
      highlights: ['Mountain Views', 'Adventure Sports', 'Temples', 'Local Culture'],
      includes: ['Mountain Resort', 'Meals', 'Transport', 'Adventure Activities'],
      rating: 4.6,
      reviews: 127
    },
    {
      name: 'South India Heritage',
      duration: '9 Days / 8 Nights',
      price: '₹55,000',
      originalPrice: '₹65,000',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackImage: 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=South+India+Heritage',
      destinations: ['Bangalore', 'Mysore', 'Hampi', 'Pondicherry'],
      highlights: ['Palaces', 'Temples', 'Beaches', 'French Heritage'],
      includes: ['Heritage Hotels', 'Meals', 'Transport', 'Guide', 'Entry Fees'],
      rating: 4.8,
      reviews: 76
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
              Travel Packages
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Carefully crafted itineraries for the perfect Indian adventure. 
              Choose from our range of packages designed for every type of traveler.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Best Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked experiences that showcase the best of India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={pkg.image}
                    fallbackSrc={pkg.fallbackImage}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Save ₹{parseInt(pkg.originalPrice.replace(/[₹,]/g, '')) - parseInt(pkg.price.replace(/[₹,]/g, ''))}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-white/90 text-gray-900 px-2 py-1 rounded-full text-sm">
                      <span className="text-yellow-400 mr-1">⭐</span>
                      <span className="font-semibold">{pkg.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary-600">{pkg.price}</div>
                      <div className="text-sm text-gray-500 line-through">{pkg.originalPrice}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-600 mb-2">{pkg.duration}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="text-yellow-400 mr-1">⭐</span>
                      <span>{pkg.rating} ({pkg.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Destinations:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pkg.destinations.map((dest, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Includes:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pkg.includes.map((item, idx) => (
                        <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full btn-primary mb-2">
                    Book Now
                  </button>
                  <button className="w-full text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We ensure every detail is perfect for your Indian adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Planning</h3>
              <p className="text-gray-600">Carefully crafted itineraries by local experts</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Value</h3>
              <p className="text-gray-600">Competitive pricing with no hidden costs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance throughout your journey</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Book Your Adventure?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to customize your perfect Indian journey or book any of our packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Contact Us
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Customize Package
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
