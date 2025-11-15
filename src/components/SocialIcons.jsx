import React from 'react'
import { motion } from 'framer-motion'

const SocialIcons = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ugodwebdeveloper?igsh=MTN4c2oxa211d2lm&utm_source=qr',
      icon: '📷',
      color: 'from-pink-500 to-pink-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ugochi-dim-3158b2312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      icon: '💼',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/ugochi_d?s=21',
      icon: '🐦',
      color: 'from-gray-800 to-gray-900'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Ugo968',
      icon: '💻',
      color: 'from-gray-700 to-gray-800'
    }
  ]

  return (
    <div className="flex justify-center space-x-6 mt-8">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.2,
            y: -5
          }}
          whileTap={{ scale: 0.9 }}
          className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} text-white flex items-center justify-center text-lg shadow-lg hover:shadow-xl transition-all duration-300`}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  )
}

export default SocialIcons