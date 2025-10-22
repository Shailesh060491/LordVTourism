import { motion } from 'framer-motion';
import ImageWithFallback from '../components/ImageWithFallback';
import SahebraoImage from '../assets/Sahebrao.jpg';
import ShrutikaImage from '../assets/Shrutika.jpg';

const About = () => {
  const teamMembers = [
    {
      name: 'Mrs. Shrutika Rautwar',
      position: 'Director',
      image: ShrutikaImage,
      fallbackImage: 'https://via.placeholder.com/300x300/8B5CF6/FFFFFF?text=Mrs.+Shrutika+Rautwar',
      description: 'Leading our vision to showcase India\'s incredible diversity and beauty',
      email: 'admin@lordvtourism.com',
      phone: '+91 77700 12001'
    },
    {
      name: 'Mr. Sahebrao Rautwar',
      position: 'Founder & CEO',
      image: SahebraoImage,
      fallbackImage: 'https://via.placeholder.com/300x300/3B82F6/FFFFFF?text=Mr.+Sahebrao+Rautwar',
      description: 'Founder and visionary leader passionate about creating authentic travel experiences across India',
      email: 'admin@lordvtourism.com',
      phone: '+91 77700 12001'
    },
    {
      name: 'Travel Experts Team',
      position: 'Local Guides & Specialists',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      fallbackImage: 'https://via.placeholder.com/300x300/10B981/FFFFFF?text=Travel+Experts+Team',
      description: 'Our dedicated team of local experts who know every hidden gem and cultural treasure',
      email: 'support@lordvtourism.com',
      phone: '+91 92265 51564'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description: 'To showcase the incredible diversity and beauty of India while providing authentic, memorable travel experiences that connect people with our rich culture and heritage.'
    },
    {
      icon: '👁️',
      title: 'Our Vision',
      description: 'To be India\'s most trusted travel partner, known for creating transformative journeys that inspire wanderlust and foster cultural understanding.'
    },
    {
      icon: '💎',
      title: 'Our Values',
      description: 'Authenticity, sustainability, respect for local communities, and commitment to providing exceptional service that exceeds expectations.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Travelers' },
    { number: '500+', label: 'Destinations Covered' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Customer Satisfaction' }
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
              About LordV Tourism
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Your trusted partner in discovering the incredible beauty and rich heritage of India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Founded in 2008, LordV Tourism began as a small family business with a simple mission: 
                  to share the incredible beauty and diversity of India with travelers from around the world.
                </p>
                <p>
                  What started as local tours in Rajasthan has grown into one of India's most trusted travel 
                  companies, offering curated experiences across the length and breadth of this magnificent country.
                </p>
                <p>
                  Our team of passionate travel experts, local guides, and cultural enthusiasts work tirelessly 
                  to create authentic, memorable journeys that showcase the true spirit of India.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Team working together"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind your perfect Indian adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="relative mb-6">
                  <ImageWithFallback
                    src={member.image}
                    fallbackSrc={member.fallbackImage}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.description}</p>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-500">📧 {member.email}</p>
                  <p className="text-gray-500">📞 {member.phone}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl text-primary-600 mb-6">"</div>
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 italic">
                "India is not a country, it's a universe. Every state is a different planet, 
                every city a different galaxy, and every village a different star. 
                To travel through India is to journey through the cosmos of human experience."
              </blockquote>
              <div className="text-lg text-gray-600">
                — Our Philosophy at LordV Tourism
              </div>
            </div>
          </motion.div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us be your guide to discovering the incredible beauty and rich heritage of India. 
              Contact us today to plan your perfect adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Contact Us
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                View Our Packages
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
