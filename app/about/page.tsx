'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import {
  FaBookOpen,
  FaCalendarAlt,
  FaCode,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaInstagram,
  FaLayerGroup,
  FaLinkedin,
  FaPalette,
  FaSpotify,
  FaTwitter,
} from 'react-icons/fa'

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

const skills = [
  {
    title: 'Engineering',
    icon: FaCode,
    description:
      'The power of first impressions cannot be underestimated, and the gateway to capitalizing on them lies in exceptional website design. An outstanding website transcends mere aesthetics and extends its influence to encompass seamless functionality and user-friendly navigation. Drawing upon my expertise as a seasoned programmer, I possess the unique ability to tackle intricate technical challenges while crafting websites that exude sleekness and visual allure.',
    link: 'View Github',
    href: '#',
  },
  {
    title: 'Product',
    icon: FaLayerGroup,
    description:
      "While I may not fit the conventional mold of a product manager, my diverse skill set in research, product design, and product coordination empowers me to drive the growth of a product from its inception. As an exceptional analytical thinker, I possess the ability to uphold the product's vision throughout its entire journey, effectively bridging the technical and product aspects.",
    link: 'View Products',
    href: '#',
  },
  {
    title: 'Design',
    icon: FaPalette,
    description:
      'Despite not fitting the typical designer stereotype, my exceptional visual abilities enable me to excel as a presenter, effectively conveying design concepts to stakeholders and design teams. I possess a remarkable aptitude for conceptualization, allowing me to envision and bring forth stunning creations.',
    link: 'View Dribbble',
    href: '#',
  },
]

const reads = [
  {
    title: 'Human Centered Design 101',
    author: 'Acumen',
    year: '2017 - 2018',
    description:
      'This is an intensive, hands-on learning experience that will challenge you to get out of your chair and out into the real world to talk to people and test your ideas.',
  },
  {
    title: 'Data Structure And Algorithm',
    author: 'Udemy',
    year: '2019',
    description:
      'Many developers who are "self taught", feel that one of the main disadvantages they face compared to college educated graduates in computer science...',
  },
  {
    title: 'Adaptive Leadership',
    author: 'edX',
    year: '2019',
    description:
      "This introductory course helps you identify leadership challenges in your own life, team, or community. You'll apply the tools and techniques of Adaptative...",
  },
  {
    title: 'Learning Something Great',
    author: 'Ongoing Journey',
    year: 'Currently',
    description: 'We continue learning everyday.',
  },
]

const playlists = [
  {
    title: 'Codewonders',
    platform: 'Spotify',
    description:
      'This is an intensive, energizing songs list that helps me through the day and inspires generate breakthrough ideas.',
    link: 'View Playlist',
    href: '#',
  },
  {
    title: 'Chill Lofi Study Beats',
    platform: 'Spotify',
    description:
      'The perfect study beats, twenty four seven. with over 178 SONGS',
    link: 'View Playlist',
    href: '#',
  },
  {
    title: 'Mellow Drive',
    platform: 'Spotify',
    description: 'Easy listening for pleasant drive',
    link: 'View Playlist',
    href: '#',
  },
  {
    title: 'Rap UK',
    platform: 'Spotify',
    description: 'One of the finest rap in UK. Cover: Aitch',
    link: 'View Playlist',
    href: '#',
  },
  {
    title: 'Mood Booster',
    platform: 'Spotify',
    description: "Get happy with today's dose of feel-good songs!",
    link: 'View Playlist',
    href: '#',
  },
]

const lens = {
  title: "Adeneken's Collection",
  platform: 'Adeneken',
  description:
    'This is an intensive curation of the photochromic lenses that stand out and the ones that I personally love. Note: this is mostly based on preference.',
  link: 'Visit Page',
  href: '#',
}

const socialLinks = [
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:contact@example.com', label: 'Email' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
]

function TimelineNode({
  children,
  isLast = false,
}: {
  children: React.ReactNode
  isLast?: boolean
}) {
  return (
    <div className="flex gap-5 sm:gap-6">
      <div className="flex flex-col items-center pt-1">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-foreground">
          <div className="h-2 w-2 rounded-full bg-foreground" />
        </div>
        {!isLast && (
          <div className="my-4 h-full min-h-20 w-px bg-linear-to-b from-foreground/20 to-transparent" />
        )}
      </div>

      <div className="flex-1 pb-10">{children}</div>
    </div>
  )
}

export default function About() {
  return (
    <div className="min-h-screen">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-body flex flex-col pt-32 pb-20"
      >
        <motion.h1
          variants={itemVariants}
          className="mb-16 text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl"
        >
          About Me.
        </motion.h1>

        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="mb-12 text-3xl font-bold">What I Do.</h2>

          <div>
            {skills.map((skill, idx) => {
              const Icon = skill.icon

              return (
                <motion.div key={skill.title} variants={itemVariants}>
                  <TimelineNode isLast={idx === skills.length - 1}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Icon className="text-foreground/60" />
                        <h3 className="text-xl font-semibold">{skill.title}</h3>
                      </div>

                      <a
                        href={skill.href}
                        className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-foreground/60 underline transition-colors hover:text-foreground"
                      >
                        {skill.link}
                        <FaExternalLinkAlt size={12} />
                      </a>
                    </div>

                    <p className="mt-4 max-w-2xl leading-relaxed text-foreground/70">
                      {skill.description}
                    </p>
                  </TimelineNode>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="mb-12 text-3xl font-bold">My Reads.</h2>

          <div>
            {reads.map((read, idx) => (
              <motion.div key={read.title} variants={itemVariants}>
                <TimelineNode isLast={idx === reads.length - 1}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <FaBookOpen className="text-foreground/60" />
                        <h3 className="text-xl font-semibold">{read.title}</h3>
                      </div>

                      <p className="mt-2 text-sm text-foreground/60">
                        {read.author}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-foreground/60">
                      <FaCalendarAlt size={14} />
                      <span>{read.year}</span>
                    </div>
                  </div>

                  <p className="mt-3 max-w-2xl leading-relaxed text-foreground/70">
                    {read.description}
                  </p>
                </TimelineNode>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="mb-12 text-3xl font-bold">My Playlist.</h2>

          <div>
            {playlists.map((playlist, idx) => (
              <motion.div key={playlist.title} variants={itemVariants}>
                <TimelineNode isLast={idx === playlists.length - 1}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <FaSpotify className="text-foreground/60" />
                        <h3 className="text-xl font-semibold">
                          {playlist.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-sm text-foreground/60">
                        {playlist.platform}
                      </p>
                    </div>

                    <a
                      href={playlist.href}
                      className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-foreground/60 underline transition-colors hover:text-foreground"
                    >
                      {playlist.link}
                      <FaExternalLinkAlt size={12} />
                    </a>
                  </div>

                  <p className="mt-3 max-w-2xl leading-relaxed text-foreground/70">
                    {playlist.description}
                  </p>
                </TimelineNode>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="mb-12 text-3xl font-bold">My Photochromic Lens.</h2>

          <TimelineNode isLast>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{lens.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">
                  {lens.platform}
                </p>
              </div>

              <a
                href={lens.href}
                className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-foreground/60 underline transition-colors hover:text-foreground"
              >
                {lens.link}
                <FaExternalLinkAlt size={12} />
              </a>
            </div>

            <p className="mt-3 max-w-2xl leading-relaxed text-foreground/70">
              {lens.description}
            </p>
          </TimelineNode>
        </motion.section>

        <motion.div variants={itemVariants} className="mb-14">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-lg font-semibold text-foreground transition-colors hover:text-foreground/80"
          >
            Lets Continue To Projects
            <FaExternalLinkAlt className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

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
