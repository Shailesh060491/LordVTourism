import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      name: 'Deep Cleaning Service',
      description: 'Comprehensive cleaning solutions for homes, offices, and commercial spaces',
      icon: '🧽',
      features: [
        'Complete sanitization',
        'Carpet and upholstery cleaning',
        'Kitchen deep cleaning',
        'Bathroom sanitization',
        'Window and glass cleaning',
        'Floor polishing and waxing'
      ],
      pricing: 'Starting from ₹2,500',
      duration: '4-6 hours',
      image: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Deep+Cleaning'
    },
    {
      name: 'Regular Housekeeping',
      description: 'Daily, weekly, or monthly cleaning services to keep your space spotless',
      icon: '🏠',
      features: [
        'Daily maintenance cleaning',
        'Weekly deep cleaning',
        'Monthly comprehensive service',
        'Flexible scheduling',
        'Eco-friendly products',
        'Insured and bonded staff'
      ],
      pricing: 'Starting from ₹1,200',
      duration: '2-4 hours',
      image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Housekeeping'
    },
    {
      name: 'Office Cleaning',
      description: 'Professional cleaning services for commercial and office spaces',
      icon: '🏢',
      features: [
        'Daily office maintenance',
        'Conference room cleaning',
        'Reception area upkeep',
        'Restroom sanitization',
        'Trash removal',
        'After-hours service available'
      ],
      pricing: 'Starting from ₹3,500',
      duration: '3-5 hours',
      image: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Office+Cleaning'
    }
  ];

  const whyChooseUs = [
    {
      icon: '🛡️',
      title: 'Insured & Bonded',
      description: 'Fully insured and bonded for your peace of mind'
    },
    {
      icon: '🌿',
      title: 'Eco-Friendly',
      description: 'We use only environmentally safe cleaning products'
    },
    {
      icon: '⏰',
      title: 'Flexible Scheduling',
      description: 'Available 7 days a week, including evenings and weekends'
    },
    {
      icon: '👥',
      title: 'Trained Staff',
      description: 'Professional, experienced, and background-checked cleaners'
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
              Professional Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Deep cleaning and maintenance services for homes, offices, and commercial spaces. 
              Professional, reliable, and eco-friendly solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {service.pricing}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                      <p className="text-gray-600 text-sm">{service.duration}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full btn-primary mb-2">
                    Book Service
                  </button>
                  <button className="w-full text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200">
                    Get Quote
                  </button>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide reliable, professional cleaning services with a commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Book Your Cleaning Service?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a free quote and let us take care of your cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
                Call Now: +91 92265 51564
              </button>
              <button className="bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
                WhatsApp Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
