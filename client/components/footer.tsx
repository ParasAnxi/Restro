import Link from "next/link"
import { ChefHat, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0f1115] border-t border-border pt-16 pb-8 dark:bg-background text-foreground relative z-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-white text-[#0f1115] p-2 rounded-full dark:bg-foreground dark:text-background">
                <ChefHat className="h-6 w-6" />
              </div>
              <div className="flex flex-col text-white dark:text-foreground">
                <span className="text-xl font-bold leading-none tracking-tight">FlavorCraft</span>
                <span className="text-[0.65rem] uppercase tracking-widest text-primary font-semibold">Restaurant</span>
              </div>
            </div>
            <p className="text-gray-400 dark:text-muted-foreground text-sm leading-relaxed max-w-xs">
              FlavorCraft is more than a restaurant - it's a celebration of flavors, people, and unforgettable moments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white dark:text-foreground text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "Menu", href: "/menu" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-400 dark:text-muted-foreground hover:text-primary transition-colors text-sm">
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white dark:text-foreground text-lg">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-gray-400 dark:text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400 dark:text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">hello@flavorcraft.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400 dark:text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">123, Food Street, Culinary City,<br/>Flavorland - 400001</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white dark:text-foreground text-lg">Follow Us</h3>
            <div className="flex items-center gap-4 fill-current">
              <a href="#" className="h-10 w-10 rounded-full border border-gray-600 dark:border-border flex items-center justify-center text-gray-400 dark:text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-gray-600 dark:border-border flex items-center justify-center text-gray-400 dark:text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <span className="font-bold font-sans text-sm">Wa</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-gray-600 dark:border-border flex items-center justify-center text-gray-400 dark:text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-gray-600 dark:border-border flex items-center justify-center text-gray-400 dark:text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
            <p className="text-gray-400 dark:text-muted-foreground text-sm mt-2">
              Stay connected for updates & special offers!
            </p>
          </div>
        </div>
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 dark:border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 dark:text-muted-foreground text-xs md:text-sm">
            © 2025 FlavorCraft Restaurant. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-gray-400 dark:text-muted-foreground text-xs md:text-sm">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="hidden md:inline">|</span>
            <Link href="#" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}