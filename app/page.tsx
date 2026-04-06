'use client'

import { GlitchText } from '@/components/GlitchText'
import { socialLinks } from '@/data/social-link'
import { containerVariants, itemVariants } from '@/lib/constants'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

export default function Home() {
  return (
    <div className="relative overflow-hidden pt-32 pb-10">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-body relative z-10 flex flex-col justify-center"
      >
        {/* 1. Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <GlitchText
            text="I'M MD. NURUZZAMAN"
            className=" font-semibold leading-tight tracking-[0.29em] text-4xl"
          />
        </motion.div>

        {/* 2. Description 1 */}
        <motion.p
          variants={itemVariants}
          className="mb-6 max-w-3xl leading-8 text-foreground/90"
        >
          Your friendly neighborhood Frontend Developer and JavaScript Engineer
          based in Dhaka, Bangladesh. I spend my days building meaningful{' '}
          <Link
            href="/projects"
            className="font-semibold text-foreground transition-all hover:opacity-70 hover:underline"
          >
            PROJECTS
          </Link>{' '}
          with React.js, Next.js, and TypeScript — currently working full-time
          at{' '}
          <Link
            href="https://sparktech.agency"
            target="_blank"
            className="font-semibold text-foreground transition-all hover:opacity-70 hover:underline"
          >
            Sparktech Agency
          </Link>{' '}
          as a Full Stack Developer.
        </motion.p>

        {/* 3. Description 2 */}
        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-3xl leading-8 text-foreground/90"
        >
          Self-taught and production-tested with 2+ years of professional
          experience. I&apos;m actively growing into the backend with Node.js,
          Express, and MongoDB — because I want to own the full picture, not
          just the frontend. I write about what I learn on my{' '}
          <Link
            href="/blog"
            className="font-semibold text-foreground transition-all hover:opacity-70 hover:underline"
          >
            BLOG
          </Link>
          , share my work on{' '}
          <Link
            href="https://github.com/mdnuruzzamannirob"
            target="_blank"
            className="font-semibold text-foreground transition-all hover:opacity-70 hover:underline"
          >
            GitHub
          </Link>
          , and always open to new opportunities. Anyways, you can{' '}
          <Link
            href="/contact"
            className="font-semibold text-foreground transition-all hover:opacity-70 hover:underline"
          >
            CONTACT ME
          </Link>
          .
        </motion.p>

        {/* 4. Button / CTA */}
        <motion.div variants={itemVariants} className="mb-14">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 font-medium text-foreground transition-all duration-300 hover:gap-4"
          >
            See More About Me
            <BsArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* 5. Footer Links */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-5 pt-2"
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
