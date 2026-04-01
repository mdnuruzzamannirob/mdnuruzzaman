'use client'

import { motion } from 'framer-motion'

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  return (
    <div className="relative inline-block">
      <motion.h1
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {text}
      </motion.h1>

      {/* Red glitch layer */}
      <motion.h1
        className={`${className} absolute top-0 left-0 opacity-80`}
        style={{ color: '#ff0000', zIndex: -1 }}
        animate={{
          x: [0, -2, 2, -2, 0],
          transition: { duration: 0.15, repeat: Infinity, repeatDelay: 2.5 },
        }}
      >
        {text}
      </motion.h1>

      {/* Cyan glitch layer */}
      <motion.h1
        className={`${className} absolute top-0 left-0 opacity-80`}
        style={{ color: '#00ffff', zIndex: -1 }}
        animate={{
          x: [0, 2, -2, 2, 0],
          transition: {
            duration: 0.15,
            repeat: Infinity,
            repeatDelay: 2.5,
            delay: 0.05,
          },
        }}
      >
        {text}
      </motion.h1>
    </div>
  )
}
