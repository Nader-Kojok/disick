import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "./Button"

const navigation = {
  main: [
    { name: "Accueil", href: "/" },
    { name: "Cours", href: "/cours" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Cours collectifs", href: "/cours/collectifs" },
    { name: "Coaching personnel", href: "/cours/personnel" },
    { name: "Nutrition", href: "/services/nutrition" },
    { name: "Événements", href: "/evenements" },
  ],
  legal: [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Politique de confidentialité", href: "/confidentialite" },
    { name: "CGV", href: "/cgv" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
  ],
}

const contactInfo = {
  address: "123 Avenue de la République, Dakar, Sénégal",
  phone: "+221 XX XXX XX XX",
  email: "contact@disick.sn",
  hours: "Lun-Sam: 6h-22h | Dim: 8h-20h",
}

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold">Restez informé de nos actualités</h3>
              <p className="mt-2 text-sm text-gray-400">
                Inscrivez-vous à notre newsletter pour recevoir nos dernières offres et actualités.
              </p>
            </div>
            <form className="flex w-full max-w-md gap-4">
              <input
                type="email"
                placeholder="Votre email"
                className="min-w-0 flex-auto rounded-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
              />
              <Button
                type="submit"
                variant="primary"
                size="md"
              >
                S&apos;inscrire
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Disick Training Center</h3>
            <p className="text-sm text-gray-400">
              Centre de formation sportive d&apos;excellence à Dakar, dédié à votre bien-être et performance.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-orange-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Nos Services</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-orange-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin className="h-5 w-5 text-orange-500" />
                {contactInfo.address}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="h-5 w-5 text-orange-500" />
                {contactInfo.phone}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="h-5 w-5 text-orange-500" />
                {contactInfo.email}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Clock className="h-5 w-5 text-orange-500" />
                {contactInfo.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Disick Training Center. Tous droits réservés.
            </p>
            <ul className="flex gap-6">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
} 