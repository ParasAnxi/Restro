import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChefHat, Leaf, ShoppingCart, Users, ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "dine-in",
      title: "Dine-In Experience",
      description: "Experience the perfect ambiance with our world-class dining. Whether it's a romantic dinner or a family gathering, we provide the perfect setting.",
      icon: <ChefHat className="w-10 h-10" />,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
      features: ["Elegant Atmosphere", "Table Service", "Extensive Wine List", "Live Music on Weekends"]
    },
    {
      id: "takeaway",
      title: "Quick Takeaway",
      description: "Enjoy our signature dishes from the comfort of your home. Freshly prepared and carefully packed to maintain the perfect temperature.",
      icon: <Leaf className="w-10 h-10" />,
      image: "https://images.unsplash.com/photo-1562157508-3482705b223d?q=80&w=1000&auto=format&fit=crop",
      features: ["Eco-friendly Packaging", "No Waiting Time", "Special Takeaway Menu", "Curbside Pickup"]
    },
    {
      id: "delivery",
      title: "Home Delivery",
      description: "Fast and reliable delivery right to your doorstep. Satisfy your cravings without stepping out of your house.",
      icon: <ShoppingCart className="w-10 h-10" />,
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1000&auto=format&fit=crop",
      features: ["Real-time Tracking", "Contactless Delivery", "Hot & Fresh Guarantee", "Loyalty Rewards"]
    },
    {
      id: "catering",
      title: "Event Catering",
      description: "Make your special events memorable with our customized catering services. From intimate parties to grand corporate events.",
      icon: <Users className="w-10 h-10" />,
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop",
      features: ["Customized Menus", "Professional Staff", "Setup & Cleanup", "Dietary Accommodations"]
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-0">
        {/* Header Section */}
        <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden border-b border-border/50 text-center">
          <div className="absolute inset-0 z-0 bg-[#0f1115]">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
              alt="Services Background"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>
          <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-10">
            <h2 className="text-xl md:text-2xl text-primary font-medium mb-2 uppercase tracking-widest">What We Do</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">Our Services</h1>
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-primary" />
              <span className="text-primary">Services</span>
            </div>
          </div>
        </section>

        {/* Services List Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative h-[400px] lg:h-[500px] w-full rounded-[2.5rem] overflow-hidden border border-border/50 group">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex items-end p-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-xl">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">{service.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed pt-2">
                    {service.description}
                  </p>
                </div>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border/50">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Private Events Banner */}
        <section className="container mx-auto px-4 lg:px-8 pb-20 -mb-10 relative z-20">
          <div className="bg-card border border-border/50 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-lg">
            <div className="lg:w-5/12 relative h-64 lg:h-auto">
              <Image 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop" 
                alt="Private Events" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="lg:w-7/12 p-10 md:p-16 flex flex-col justify-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Plan Your Next Big Event With Us</h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                Whether it's a corporate gathering, a wedding reception, or an intimate birthday party, our dedicated events team will ensure every detail is perfect.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 w-full sm:w-auto font-bold text-md">
                  Enquire Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
