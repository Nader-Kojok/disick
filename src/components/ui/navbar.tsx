"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/#about" },
  { name: "Cours", href: "/#courses" },
  { name: "Planning", href: "/#planning" },
  { name: "Tarifs", href: "/#pricing" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const handleNavigation = (href: string) => {
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMobileMenuOpen(false)
  }

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link 
            href="/" 
            className="-m-1.5 p-1.5 group relative"
          >
            <span className="font-bold text-xl text-orange-500 transition-all duration-300 group-hover:text-orange-400">
              Disick Training Center
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2 text-white hover:text-orange-500 transition-all duration-300 hover:bg-white/10"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Ouvrir le menu principal</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith('/#')) {
                  e.preventDefault()
                  handleNavigation(item.href)
                }
              }}
              className="group relative text-sm font-medium text-white hover:text-orange-500 transition-all duration-300"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/reservation"
            className="relative inline-flex items-center px-6 py-2.5 text-sm font-medium rounded-full text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
          >
            Réserver un cours
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? "fixed inset-0 z-50 opacity-100" 
            : "fixed inset-0 z-50 opacity-0 pointer-events-none"
        }`}
      >
        <div 
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`} 
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div 
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="font-bold text-xl text-orange-500">Disick Training Center</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2 text-white hover:text-orange-500 transition-all duration-300 hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fermer le menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-700">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith('/#')) {
                        e.preventDefault()
                        handleNavigation(item.href)
                      }
                      setMobileMenuOpen(false)
                    }}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-white hover:text-orange-500 hover:bg-white/5 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/reservation"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium rounded-full text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Réserver un cours
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 