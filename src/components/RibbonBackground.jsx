import React from 'react'
import { motion } from 'framer-motion'

const RibbonBackground = () => {
  // Create more ribbons for a denser background effect
  const ribbons = Array.from({ length: 25 }, (_, i) => i)

  // Ribbon colors in pink and lilac shades
  const ribbonColors = [
    'bg-pink-200', 'bg-pink-300', 'bg-pink-400',
    'bg-lilac-200', 'bg-lilac-300', 'bg-lilac-400',
    'bg-pink-100', 'bg-lilac-100'
  ]

  // Different ribbon shapes and sizes
  const ribbonStyles = [
    { width: '40px', height: '8px', borderRadius: '4px' },
    { width: '30px', height: '6px', borderRadius: '3px' },
    { width: '50px', height: '10px', borderRadius: '5px' },
    { width: '35px', height: '7px', borderRadius: '3.5px' },
    { width: '45px', height: '9px', borderRadius: '4.5px' }
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {ribbons.map((i) => {
        const color = ribbonColors[Math.floor(Math.random() * ribbonColors.length)]
        const style = ribbonStyles[Math.floor(Math.random() * ribbonStyles.length)]
        const rotation = Math.random() * 360
        const delay = Math.random() * 5
        const duration = 6 + Math.random() * 4
        const opacity = 0.3 + Math.random() * 0.4 // Varying opacity for depth
        
        return (
          <motion.div
            key={i}
            className={`absolute ${color} opacity-40`}
            style={{
              ...style,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: rotation,
              opacity: opacity,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [rotation, rotation + Math.random() * 20 - 10, rotation],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
          />
        )
      })}

      {/* Additional floating elements for more visual interest */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 rounded-full bg-pink-300 opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default RibbonBackground