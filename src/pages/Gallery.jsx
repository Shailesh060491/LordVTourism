import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageWithFallback from '../components/ImageWithFallback';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackSrc: 'https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Taj+Mahal',
      title: 'Taj Mahal at Sunrise',
      location: 'Agra, Uttar Pradesh',
      category: 'Heritage'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1544551763-46a013bb2dcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackSrc: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Goa+Beach',
      title: 'Goa Beach Sunset',
      location: 'Goa',
      category: 'Beaches'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1583417319078-c4a8c2b0a8a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackSrc: 'https://via.placeholder.com/400x300/059669/FFFFFF?text=Kerala+Backwaters',
      title: 'Kerala Backwaters',
      location: 'Kerala',
      category: 'Nature'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackSrc: 'https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Amber+Fort',
      title: 'Amber Fort Palace',
      location: 'Jaipur, Rajasthan',
      category: 'Heritage'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackSrc: 'https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Ladakh+Mountains',
      title: 'Ladakh Mountains',
      location: 'Ladakh, Jammu & Kashmir',
      category: 'Mountains'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackSrc: 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Ganga+Aarti',
      title: 'Ganga Aarti Ceremony',
      location: 'Varanasi, Uttar Pradesh',
      category: 'Culture'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackSrc: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Mysore+Palace',
      title: 'Mysore Palace Illumination',
      location: 'Mysore, Karnataka',
      category: 'Heritage'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackSrc: 'https://via.placeholder.com/400x300/06B6D4/FFFFFF?text=Darjeeling+Tea',
      title: 'Darjeeling Tea Gardens',
      location: 'Darjeeling, West Bengal',
      category: 'Nature'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1544551763-46a013bb2dcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackSrc: 'https://via.placeholder.com/400x300/059669/FFFFFF?text=Kerala+Houseboat',
      title: 'Kerala Houseboat',
      location: 'Alleppey, Kerala',
      category: 'Nature'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackSrc: 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Rajasthan+Desert',
      title: 'Rajasthan Desert',
      location: 'Jaisalmer, Rajasthan',
      category: 'Desert'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1583417319078-c4a8c2b0a8a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackSrc: 'https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Himalayan+Sunrise',
      title: 'Himalayan Sunrise',
      location: 'Manali, Himachal Pradesh',
      category: 'Mountains'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fallbackSrc: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Temple+Architecture',
      title: 'Temple Architecture',
      location: 'Khajuraho, Madhya Pradesh',
      category: 'Heritage'
    }
  ];

  const categories = ['All', 'Heritage', 'Nature', 'Beaches', 'Mountains', 'Culture', 'Desert'];

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

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
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Explore the beauty of India through our stunning collection of photographs. 
              From majestic monuments to serene landscapes, discover the diverse charm of incredible India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-primary-100 hover:text-primary-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="card overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={image.src}
                      fallbackSrc={image.fallbackSrc}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {image.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{image.location}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={selectedImage.src}
                fallbackSrc={selectedImage.fallbackSrc}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-b-lg">
                <h3 className="text-xl font-semibold mb-1">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.location}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Ready to Experience These Wonders?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us help you plan your own journey to capture these beautiful moments and create unforgettable memories.
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

export default Gallery;
