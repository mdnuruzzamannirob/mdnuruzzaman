'use client'

import { motion } from 'framer-motion'
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'

const socialLinks = [
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:contact@example.com', label: 'Email' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
]

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={`flex justify-normal items-center gap-6 py-8 px-4 ${className}`}
    >
      {socialLinks.map((social, idx) => {
        const Icon = social.icon
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            <Icon size={24} />
          </motion.a>
        )
      })}
    </footer>
  )
}
