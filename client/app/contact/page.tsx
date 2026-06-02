import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CalendarDays, Clock, Users, ShieldCheck, MapPin, Phone, Mail, ArrowRight, ChevronRight, Star } from "lucide-react"
export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-0">
        {/* Header Section */}
        <section className="relative w-full h-[35vh] flex items-center justify-center overflow-hidden border-b border-border/50 text-center">
          <div className="absolute inset-0 z-0 bg-[#0f1115]">
            <Image
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop"
              alt="Contact Background"
              fill
              className="object-cover opacity-40 blur-sm scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/80 to-transparent" />
          </div>
          <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact & Reservation</h1>
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-primary" />
              <span className="text-primary">Contact</span>
            </div>
          </div>
        </section>
        {/* Main Content */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Left Column: Booking Form */}
            <div className="bg-card border border-border/50 rounded-[2rem] p-8 md:p-12 shadow-sm">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Book Your Table</h2>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-12 h-px bg-border/50" />
                  <div className="w-2 h-2 rotate-45 border border-primary text-primary flex items-center justify-center"><div className="w-1 h-1 bg-primary rounded-full"/></div>
                  <div className="w-12 h-px bg-border/50" />
                </div>
                <p className="text-muted-foreground">Reserve your table for a delightful dining experience.</p>
              </div>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input placeholder="Enter your full name" className="pl-10 h-12 rounded-xl bg-background border-border/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <div className="flex gap-2">
                    <Select defaultValue="in">
                      <SelectTrigger className="w-[100px] h-12 rounded-xl bg-background border-border/50">
                        <SelectValue placeholder="+91" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in">🇮🇳 +91</SelectItem>
                        <SelectItem value="us">🇺🇸 +1</SelectItem>
                        <SelectItem value="uk">🇬🇧 +44</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Enter your phone number" className="flex-1 h-12 rounded-xl bg-background border-border/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input type="email" placeholder="Enter your email address" className="pl-10 h-12 rounded-xl bg-background border-border/50" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Date</label>
                    <div className="relative">
                      <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input type="date" className="pl-10 h-12 rounded-xl bg-background border-border/50 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Select>
                        <SelectTrigger className="w-full pl-10 h-12 rounded-xl bg-background border-border/50 text-muted-foreground">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="19:00">07:00 PM</SelectItem>
                          <SelectItem value="19:30">07:30 PM</SelectItem>
                          <SelectItem value="20:00">08:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Select>
                      <SelectTrigger className="w-full pl-10 h-12 rounded-xl bg-background border-border/50 text-muted-foreground">
                        <SelectValue placeholder="Select number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2 People</SelectItem>
                        <SelectItem value="4">4 People</SelectItem>
                        <SelectItem value="6">6 People</SelectItem>
                        <SelectItem value="8">8+ People</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Special Request (Optional)</label>
                  <Textarea placeholder="Any special request or notes?" className="min-h-[100px] rounded-xl bg-background border-border/50 resize-none p-4" />
                </div>
                <div className="bg-[#1f1e1a] dark:bg-card/50 border border-[#4d4223] dark:border-primary/20 rounded-xl p-4 flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Your booking is confirmed instantly.</p>
                    <p className="text-sm text-muted-foreground">We look forward to serving you!</p>
                  </div>
                </div>
                <Button className="w-full h-14 bg-primary text-primary-foreground text-lg font-bold hover:bg-primary/90 rounded-xl mt-4">
                  Book Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
            {/* Right Column: Info & Map */}
            <div className="space-y-12 pt-4">
              <div className="relative w-full h-[280px] rounded-[2rem] overflow-hidden border border-border/50">
                <Image 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
                  alt="Restaurant Interior" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl italic text-primary">Visit Us</h3>
                <h2 className="text-3xl font-bold text-foreground">We'd Love to Welcome You!</h2>
                <p className="text-muted-foreground">
                  Come and experience delicious food, warm hospitality, and unforgettable moments.
                </p>
                <div className="space-y-6 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary shrink-0 bg-primary/5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Address</h4>
                      <p className="text-muted-foreground text-sm">123, Food Street, Culinary City,<br/>Flavorland - 400001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary shrink-0 bg-primary/5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary shrink-0 bg-primary/5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <p className="text-muted-foreground text-sm">hello@flavorcraft.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary shrink-0 bg-primary/5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Hours</h4>
                      <p className="text-muted-foreground text-sm mb-1">Mon - Fri: 11:00 AM - 11:00 PM</p>
                      <p className="text-muted-foreground text-sm">Sat - Sun: 10:00 AM - 12:00 AM</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-border/50">
                  <h4 className="text-xl font-bold mb-4">Follow Us</h4>
                  <div className="flex items-center gap-4 fill-current">
                    <a href="#" className="h-12 w-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                      <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                    <a href="#" className="h-12 w-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                      <span className="font-bold font-sans">Wa</span>
                    </a>
                    <a href="#" className="h-12 w-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                      <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="#" className="h-12 w-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                      <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Map Section */}
        <section className="container mx-auto px-4 lg:px-8 pb-12">
          <div className="w-full h-[400px] bg-muted rounded-[2rem] overflow-hidden border border-border/50 relative">
            <Image 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
              alt="Map placeholder" 
              fill 
              className="object-cover opacity-80" 
            />
            {/* Map styling overlay to make it look like the design */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-background shadow-xl rounded-xl p-4 flex gap-4 max-w-sm">
                  <div className="text-red-500 mt-1">
                    <MapPin className="w-8 h-8 fill-red-500 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">FlavorCraft Restaurant</h4>
                    <p className="text-sm text-muted-foreground">123, Food Street, Culinary City</p>
                    <div className="flex items-center gap-1 mt-1 text-xs">
                      <span className="font-bold">4.8</span>
                      <div className="flex text-primary">
                        {[1,2,3,4,5].map(i=><Star key={i} className="w-3 h-3 fill-current" />)}
                      </div>
                      <span className="text-primary hover:underline cursor-pointer ml-1">220 reviews</span>
                    </div>
                    <Link href="#" className="text-primary text-xs hover:underline mt-2 inline-block">View larger map</Link>
                  </div>
                  <div className="flex flex-col items-center justify-center ml-auto border-l pl-4 border-border/50 text-blue-500 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span className="text-[10px] font-medium mt-1">Directions</span>
                  </div>
               </div>
            </div>
            {/* Map Controls */}
            <div className="absolute bottom-4 right-4 bg-background rounded-md shadow-md flex flex-col overflow-hidden">
               <button className="w-8 h-8 flex items-center justify-center hover:bg-muted text-foreground font-bold border-b border-border/50">+</button>
               <button className="w-8 h-8 flex items-center justify-center hover:bg-muted text-foreground font-bold">-</button>
            </div>
          </div>
        </section>
        {/* Event Banner */}
        <section className="container mx-auto px-4 lg:px-8 pb-20 -mb-10 relative z-20">
          <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg dark:bg-[#15171b]">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 border border-primary text-primary rounded-xl flex items-center justify-center shrink-0 bg-primary/5">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Hosting an Event?</h3>
                <p className="text-muted-foreground text-sm">We offer special setups for birthdays, anniversaries and corporate events.</p>
              </div>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 px-8 rounded-xl w-full md:w-auto shrink-0 font-bold">
              Enquire Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}