'use client'

import { motion, type Variants } from 'framer-motion'
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaTwitter,
} from 'react-icons/fa'

const contactMethods = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'hello@adeneken.com',
    link: 'mailto:hello@adeneken.com',
  },
  {
    icon: FaPhoneAlt,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'San Francisco, CA',
    link: '#',
  },
]

const socialLinks = [
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:contact@example.com', label: 'Email' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Contact() {
  return (
    <div className="relative overflow-hidden pt-32 pb-20">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-body flex min-h-[calc(100vh-8rem)] flex-col"
      >
        {/* Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
            Contact Me.
          </h1>
        </motion.div>

        {/* Intro */}
        <motion.p
          variants={itemVariants}
          className="mb-14 max-w-2xl leading-8 text-foreground/75"
        >
          Have a project in mind, a collaboration idea, or just want to say
          hello? I&apos;m always open to meaningful conversations and building
          thoughtful digital experiences together.
        </motion.p>

        {/* Contact Methods */}
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="mb-10 text-3xl font-bold">Get In Touch.</h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {contactMethods.map((method) => {
              const Icon = method.icon

              return (
                <motion.a
                  key={method.label}
                  href={method.link}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group rounded-2xl border border-foreground/10 bg-foreground/3 p-6 transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/5"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/5">
                    <Icon className="text-lg text-foreground/80" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {method.label}
                  </h3>

                  <p className="text-sm leading-6 text-foreground/60 transition-colors group-hover:text-foreground/80">
                    {method.value}
                  </p>
                </motion.a>
              )
            })}
          </div>
        </motion.section>

        {/* Form */}
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="mb-10 text-3xl font-bold">Send A Message.</h2>

          <div className="rounded-3xl border border-foreground/10 bg-foreground/2 p-6 sm:p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-foreground/35 focus:border-foreground/30"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-foreground/35 focus:border-foreground/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-foreground/35 focus:border-foreground/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">
                  Message
                </label>
                <textarea
                  rows={7}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-foreground/10 bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-foreground/35 focus:border-foreground/30"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 rounded-xl bg-foreground px-6 py-3 font-medium text-background transition-all"
              >
                <FaPaperPlane size={14} />
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.section>

        {/* Footer / Social */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-5 border-t border-foreground/10 pt-8"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon

            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-foreground/60 transition-colors hover:text-foreground"
              >
                <Icon size={22} />
              </motion.a>
            )
          })}
        </motion.div>
      </motion.section>
    </div>
  )
}
