import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Leaf, ChefHat, Heart, ArrowRight, ChevronRight, Target, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-0">
        {/* Header Section */}
        <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden border-b border-border/50 text-center">
          <div className="absolute inset-0 z-0 bg-[#0f1115]">
            <Image
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
              alt="Restaurant Interior"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>
          <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-10">
            <h2 className="text-xl md:text-2xl text-primary font-medium mb-2 uppercase tracking-widest">Who We Are</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">About FlavorCraft</h1>
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-primary" />
              <span className="text-primary">About</span>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden border border-border/50 group">
              <Image 
                src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?q=80&w=2070&auto=format&fit=crop" 
                alt="Chef cooking" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex items-end p-8">
                <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-xl max-w-sm">
                  <h4 className="text-xl font-bold mb-2">Since 2010</h4>
                  <p className="text-sm text-muted-foreground">Serving happiness and crafting flavors for over a decade.</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl text-primary font-bold">Our Story</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">A Journey of Flavors & Passion</h2>
                <p className="text-muted-foreground text-lg pt-2 leading-relaxed">
                  FlavorCraft started with a simple vision: to bring people together over extraordinary food. What began as a small family kitchen has blossomed into a culinary destination.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our chefs travel the world to source the finest ingredients, blending traditional recipes with modern techniques. Every dish is a labor of love, designed to evoke nostalgia and create new memories.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="flex flex-col gap-2">
                  <span className="text-5xl font-bold text-primary">15+</span>
                  <span className="font-medium text-foreground">Years Experience</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-5xl font-bold text-primary">50+</span>
                  <span className="font-medium text-foreground">Signature Dishes</span>
                </div>
              </div>
              <div className="pt-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-md px-8 rounded-full h-14">
                  View Our Menu <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-24 bg-card border-y border-border/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h3 className="text-2xl text-primary font-bold">Our Core Values</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">What Drives Us Everyday</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Value 1 */}
              <div className="bg-background rounded-[2rem] p-10 border border-border/50 text-center space-y-4 hover:border-primary/50 transition-colors group">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Leaf className="h-10 w-10" />
                </div>
                <h4 className="text-2xl font-bold">Sustainability</h4>
                <p className="text-muted-foreground">We source local, organic ingredients to support our community and protect the environment.</p>
              </div>
              {/* Value 2 */}
              <div className="bg-background rounded-[2rem] p-10 border border-border/50 text-center space-y-4 hover:border-primary/50 transition-colors group">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Award className="h-10 w-10" />
                </div>
                <h4 className="text-2xl font-bold">Excellence</h4>
                <p className="text-muted-foreground">We never compromise on quality. Every plate that leaves our kitchen is a masterpiece.</p>
              </div>
              {/* Value 3 */}
              <div className="bg-background rounded-[2rem] p-10 border border-border/50 text-center space-y-4 hover:border-primary/50 transition-colors group">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="h-10 w-10" />
                </div>
                <h4 className="text-2xl font-bold">Hospitality</h4>
                <p className="text-muted-foreground">We treat every guest like family, ensuring a warm, welcoming, and memorable experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 lg:px-8 py-24">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-2xl text-primary font-bold">Meet The Masters</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">The Faces Behind FlavorCraft</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Marco Rossi", role: "Executive Chef", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop" },
              { name: "Sarah Chen", role: "Pastry Chef", img: "https://images.unsplash.com/photo-1595273611465-391d4e4142cb?q=80&w=800&auto=format&fit=crop" },
              { name: "David Miller", role: "Head Mixologist", img: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=800&auto=format&fit=crop" },
              { name: "Elena Gomez", role: "Restaurant Manager", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
            ].map((member, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-80 w-full rounded-2xl overflow-hidden mb-4 border border-border/50">
                  <Image src={member.img} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <div className="flex gap-4 text-white">
                      <a href="#" className="hover:text-primary transition-colors">IN</a>
                      <a href="#" className="hover:text-primary transition-colors">TW</a>
                      <a href="#" className="hover:text-primary transition-colors">FB</a>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-foreground">{member.name}</h4>
                  <p className="text-primary font-medium text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 lg:px-8 pb-20 -mb-10 relative z-20">
          <div className="bg-gradient-to-r from-[#1a1c23] to-[#252830] dark:from-card dark:to-card/50 border border-border/50 rounded-[2rem] p-10 md:p-16 flex flex-col items-center text-center gap-8 shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-foreground">Ready to Experience FlavorCraft?</h2>
            <p className="text-gray-400 dark:text-muted-foreground max-w-2xl text-lg">
              Book your table today and embark on a culinary journey you won't forget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 text-md font-bold w-full sm:w-auto">
                Reserve a Table
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-full px-10 h-14 text-md font-bold w-full sm:w-auto">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
