import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const About = () => {
  const services = [
    {
      title: "Web Developer",
      description: "Creating beautiful, responsive websites with modern technologies like React, Tailwind CSS, and more.",
      icon: "🌐",
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Virtual Assistant",
      description: "Providing comprehensive administrative support and managing your digital tasks efficiently.",
      icon: "🤖",
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "Campaign & Advert Manager",
      description: "Strategizing and executing successful marketing campaigns across various platforms.",
      icon: "🎯",
      color: "from-orange-400 to-red-400"
    },
    {
      title: "Data Entry Specialist",
      description: "Accurate and efficient data management with attention to detail and quality.",
      icon: "📊",
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Content Writer",
      description: "Crafting engaging and SEO-optimized content that resonates with your audience.",
      icon: "✍️",
      color: "from-yellow-400 to-orange-400"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-lilac-500 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a versatile professional with expertise in multiple domains. 
            Passionate about creating digital solutions and helping businesses grow.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} text-white text-2xl flex items-center justify-center mb-6 mx-auto`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-lilac-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              📖 Read My Blog
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default About