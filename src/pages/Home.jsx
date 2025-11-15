import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  const sections = [
    {
      title: "About Me",
      description: "Discover my skills and expertise in web development, virtual assistance, and more",
      path: "/about",
      icon: "👩‍💻",
      color: "from-pink-500 to-rose-500",
      delay: 0.2
    },
    {
      title: "My Blog",
      description: "Read my thoughts on web development, tech trends, and creative insights",
      path: "/blog",
      icon: "📝",
      color: "from-lilac-500 to-purple-500",
      delay: 0.4
    },
    {
      title: "Contact Me",
      description: "Let's work together! Get in touch for collaborations and projects",
      path: "/contact",
      icon: "📧",
      color: "from-blue-500 to-cyan-500",
      delay: 0.6
    },
    {
      title: "Admin Panel",
      description: "Manage blog content and portfolio updates",
      path: "/admin/blog",
      icon: "🔐",
      color: "from-emerald-500 to-green-500",
      delay: 0.8,
      isAdmin: true
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <div className="min-h-screen pt-20 px-4 pb-12">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-lilac-500 to-pink-500 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          style={{
            backgroundSize: '200% auto',
          }}
        >
          Welcome!
        </motion.h1>
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Get to know <span className="text-pink-500">Dim Ugochi</span>
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Creative Professional • Web Developer • Virtual Assistant • Content Creator
        </motion.p>
      </motion.div>

      {/* Animated Sections Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
      >
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.95 }}
            custom={index}
            className="relative group"
          >
            <Link to={section.path}>
              <div className={`bg-gradient-to-br ${section.color} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden`}>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 text-6xl opacity-50">
                    {section.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">
                      {section.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {section.title}
                    </h3>
                  </div>
                  
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    {section.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-white font-semibold text-lg"
                  >
                    Explore {section.title.toLowerCase()}
                    <span className="ml-2 text-xl">→</span>
                  </motion.div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              </div>
            </Link>

            {/* Admin Badge */}
            {section.isAdmin && (
              <div className="absolute -top-2 -right-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                Admin
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-600 text-sm"
        >
          Scroll to explore
        </motion.div>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center mx-auto mt-2"
        >
          <div className="w-1 h-3 bg-pink-400 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home