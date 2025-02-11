import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Rocket, Star, Heart, Shield, MessageCircle } from 'lucide-react';

const StatsCard = ({ icon: Icon, value, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-purple-300"
  >
    <div className="bg-blue-100 p-3 rounded-full mb-4 transform transition-transform group-hover:rotate-12">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-3xl font-bold text-gray-800 mb-2">{value}</h3>
    <p className="text-gray-600 text-center">{label}</p>
  </motion.div>
);

const ContentCard = ({ icon: Icon, title, content }) => (
  <motion.section
    className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-100 hover:border-purple-300 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.02 }}
  >
    <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
      <Icon className="text-purple-500" />
      {title}
    </h2>
    <div className="text-gray-700 leading-relaxed">
      {content}
    </div>
  </motion.section>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-300 group"
  >
    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
      <Icon className="w-6 h-6 text-purple-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <motion.header 
        className="bg-gradient-to-r from-purple-600 to-purple-100 text-white py-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-4xl font-bold mb-4 text-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          About InterestFusion
        </motion.h1>
      </motion.header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ContentCard 
            icon={Lightbulb}
            title="Welcome to InterestFusion"
            content="InterestFusion is a platform designed to connect individuals based on shared interests. We empower students, professionals, and innovators to bridge the gap between ideas and real-world applications."
          />
          <ContentCard 
            icon={Rocket}
            title="Our Mission"
            content="To inspire creativity, enable collaboration, and provide resources for transforming academic projects, entrepreneurial ideas, and personal interests into impactful solutions."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <StatsCard icon={Users} value="10,000" label="Active Users" />
          <StatsCard icon={Heart} value="25,000" label="Connections Made" />
          <StatsCard icon={Star} value="5,000" label="Interests Shared" />
        </div>

        <motion.h2 
          className="text-3xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why Choose InterestFusion?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard 
            icon={Lightbulb}
            title="Smart Matching"
            description="Our AI-powered algorithm connects you with like-minded individuals who share your passions and interests."
          />
          <FeatureCard 
            icon={Shield}
            title="Enhanced Security"
            description="Advanced privacy controls and verification systems ensure a safe and trusted environment for all users."
          />
          <FeatureCard 
            icon={MessageCircle}
            title="Real-time Chat"
            description="Instantly connect with your matches through our seamless real-time messaging platform."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ContentCard 
            icon={Star}
            title="Our Vision"
            content="We envision a world where curiosity drives innovation, collaboration fuels growth, and everyone has the opportunity to bring their ideas to life."
          />
          <ContentCard 
            icon={Users}
            title="What We Do"
            content={
              <ul className="list-disc list-inside space-y-3">
                <li><strong>Empowering Students:</strong> We help students transform academic ideas into real-world projects.</li>
                <li><strong>Fostering Innovation:</strong> We connect individuals to resources that enhance their learning and problem-solving skills.</li>
                <li><strong>Building Connections:</strong> We encourage interdisciplinary collaborations to create unique solutions.</li>
              </ul>
            }
          />
        </div>
      </div>

      <motion.div 
        className="bg-purple-600 text-white text-center py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6">Join Us Today</h2>
        <p className="mb-8 text-lg">Be part of our growing community that values creativity, collaboration, and innovation.</p>
        <motion.button 
          className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;