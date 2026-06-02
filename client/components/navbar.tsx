"use client"
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, User, ShoppingCart, Moon, Sun, ChefHat } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]
export function Navbar() {
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()
  // Avoid rendering navbar in admin panel
  if (pathname.startsWith("/admin")) return null
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8 flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-foreground text-background p-2 rounded-full">
            <ChefHat className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold leading-none tracking-tight">FlavorCraft</span>
            <span className="text-[0.65rem] uppercase tracking-widest text-primary font-semibold">Restaurant</span>
          </div>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <button className="text-foreground/80 hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-foreground/80 hover:text-primary transition-colors">
              <User className="h-5 w-5" />
            </button>
            {pathname === "/menu" && (
              <button className="text-foreground/80 hover:text-primary transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
            )}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" style={{ marginTop: '-20px' }} />
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
          <Button variant="outline" className="hidden lg:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Reserve a Table
          </Button>
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t">
                  <Button variant="outline" className="w-full border-primary text-primary">
                    Reserve a Table
                  </Button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm font-medium">Theme</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}