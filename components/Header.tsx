'use client'

import { navItems } from '@/lib/constants'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MdClose, MdDarkMode, MdLightMode, MdMenu } from 'react-icons/md'

export function Header() {
  const pathname = usePathname()

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <header className="w-full z-50 container-header py-8 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl sm:text-2xl font-bold text-foreground">
        <Link href="/">Efaz.dev</Link>
      </div>

      {/* Nav Items - Desktop */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link text-sm px-2 relative transition-all duration-300 ${
              isActive(item.href) ? 'active' : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Right Side - Theme Toggle & Mobile Menu */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2  rounded-md hover:bg-surface transition-colors"
          aria-label="Toggle theme"
        >
          {mounted &&
            (theme === 'dark' ? (
              <MdLightMode size={20} />
            ) : (
              <MdDarkMode size={20} />
            ))}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-surface transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full z-9999 left-0 right-0 md:hidden bg-background border-b border-border">
          <nav className="container-header py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link-mobile text-sm px-4 py-2 rounded transition-all duration-300 ${
                  isActive(item.href)
                    ? 'bg-surface text-foreground font-medium'
                    : 'text-foreground hover:bg-surface'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
