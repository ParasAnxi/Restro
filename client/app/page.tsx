import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Leaf, ChefHat, Heart, ChevronLeft, ChevronRight, MapPin, Phone, Users, Clock, ArrowRight, Star, User, ShoppingCart } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
export default function Home() {
  return (
     <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex items-center pt-20 overflow-hidden">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
            src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?q=80&w=2070&auto=format&fit=crop"
              alt="Chef cooking"
              fill
              className="object-cover object-right-top"
              priority
            />
              {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent dark:from-background dark:via-background/90 dark:to-transparent/40" />
          </div>
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-3xl md:text-4xl italic text-primary">Good Food, Great Moments</h2>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-foreground">
                Delicious Moments,<br />
                Made for <span className="text-primary">You</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg pb-4">
                Experience the perfect blend of taste, ambiance and hospitality. Every dish is a story.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-md px-8 rounded-full h-14">
                  Explore Menu <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-md px-8 rounded-full h-14 bg-background/50 backdrop-blur-sm">
                  Reserve a Table <CalendarDays className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative w-12 h-12 rounded-full border-2 border-background overflow-hidden">
                      <Image
                        src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80&auto=format`}
                        alt="Customer"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">4.8k+ Happy Customers</p>
                  <div className="flex items-center gap-1 text-primary">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Story Section */}
        <section className="w-full py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 text-center space-y-16">
            <div className="space-y-4">
              <h3 className="text-2xl italic text-primary">Our Story</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Crafting Flavors. Creating Memories.</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                At FlavorCraft, we believe food brings people together. Our chefs use the freshest ingredients to craft dishes that delight your senses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center space-y-4 relative z-10 bg-background md:bg-transparent">
                <div className="w-20 h-20 rounded-full border border-primary/30 flex items-center justify-center text-primary mb-2">
                  <Leaf className="h-10 w-10" />
                </div>
                <h4 className="text-xl font-bold">Fresh Ingredients</h4>
                <p className="text-muted-foreground max-w-xs">We source only the freshest, high-quality ingredients.</p>
              </div>
              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center space-y-4 relative z-10 bg-background md:bg-transparent">
                <div className="w-20 h-20 rounded-full border border-primary/30 flex items-center justify-center text-primary mb-2">
                  <ChefHat className="h-10 w-10" />
                </div>
                <h4 className="text-xl font-bold">Expert Chefs</h4>
                <p className="text-muted-foreground max-w-xs">Our chefs bring years of experience and passion to every dish.</p>
              </div>
              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center space-y-4 relative z-10 bg-background md:bg-transparent">
                <div className="w-20 h-20 rounded-full border border-primary/30 flex items-center justify-center text-primary mb-2">
                  <Heart className="h-10 w-10" />
                </div>
                <h4 className="text-xl font-bold">Warm Hospitality</h4>
                <p className="text-muted-foreground max-w-xs">We serve more than food, we create memorable experiences.</p>
              </div>
              {/* Decorative line connecting icons */}
              <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-[1px] bg-primary/20 z-0"></div>
            </div>
          </div>
        </section>
        {/* Explore Our Menu Section */}
        <section className="w-full py-24 bg-card border-y border-border/50">
          <div className="container mx-auto px-4 lg:px-8 space-y-12 text-center">
            <div className="space-y-4">
              <h3 className="text-2xl italic text-primary">Explore Our Menu</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Something for Everyone</h2>
            </div>
            <Tabs defaultValue="all" className="w-full flex flex-col items-center">
              <TabsList className="bg-transparent gap-2 flex-wrap justify-center h-auto">
                <TabsTrigger value="all" className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=inactive]:border-border/40 text-md">All Dishes</TabsTrigger>
                <TabsTrigger value="starters" className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=inactive]:border-border/40 text-md">Starters</TabsTrigger>
                <TabsTrigger value="main" className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=inactive]:border-border/40 text-md">Main Course</TabsTrigger>
                <TabsTrigger value="desserts" className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=inactive]:border-border/40 text-md">Desserts</TabsTrigger>
                <TabsTrigger value="beverages" className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=inactive]:border-border/40 text-md">Beverages</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="w-full mt-12 relative group">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Dish 1 */}
                  <div className="bg-background rounded-2xl overflow-hidden border border-border/50 shadow-sm flex flex-col text-left group/card relative">
                    <button className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop" alt="Chicken Biryani" fill className="object-cover transition-transform group-hover/card:scale-110" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="text-xl font-bold mb-2">Chicken Biryani</h4>
                      <p className="text-muted-foreground text-sm flex-grow mb-4">Fragrant basmati rice cooked with spices & tender chicken.</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="font-bold text-xl">₹349</span>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                          Order Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  {/* Dish 2 */}
                  <div className="bg-background rounded-2xl overflow-hidden border border-border/50 shadow-sm flex flex-col text-left group/card relative">
                    <button className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image src="https://images.unsplash.com/photo-1599487405270-87dcba8721c8?q=80&w=800&auto=format&fit=crop" alt="Paneer Tikka" fill className="object-cover transition-transform group-hover/card:scale-110" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="text-xl font-bold mb-2">Paneer Tikka</h4>
                      <p className="text-muted-foreground text-sm flex-grow mb-4">Cottage cheese marinated in yogurt & spices, grilled to perfection.</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="font-bold text-xl">₹299</span>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                          Order Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  {/* Dish 3 */}
                  <div className="bg-background rounded-2xl overflow-hidden border border-border/50 shadow-sm flex flex-col text-left group/card relative">
                    <button className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image src="https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=800&auto=format&fit=crop" alt="Creamy Alfredo Pasta" fill className="object-cover transition-transform group-hover/card:scale-110" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="text-xl font-bold mb-2">Creamy Alfredo Pasta</h4>
                      <p className="text-muted-foreground text-sm flex-grow mb-4">Classic pasta in rich & creamy alfredo sauce.</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="font-bold text-xl">₹349</span>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                          Order Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  {/* Dish 4 */}
                  <div className="bg-background rounded-2xl overflow-hidden border border-border/50 shadow-sm flex flex-col text-left group/card relative">
                    <button className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=800&auto=format&fit=crop" alt="Chocolate Lava Cake" fill className="object-cover transition-transform group-hover/card:scale-110" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="text-xl font-bold mb-2">Chocolate Lava Cake</h4>
                      <p className="text-muted-foreground text-sm flex-grow mb-4">Warm chocolate cake with a melted center, served with ice cream.</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="font-bold text-xl">₹249</span>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                          Order Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Carousel Controls (visual only for now) */}
                <button className="hidden lg:flex absolute top-1/2 -left-12 -translate-y-1/2 w-10 h-10 rounded-full border border-border items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button className="hidden lg:flex absolute top-1/2 -right-12 -translate-y-1/2 w-10 h-10 rounded-full border border-border items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        {/* Perfect Place to Dine Section */}
        <section className="w-full py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-border/50">
                <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" alt="Restaurant Interior" fill className="object-cover" />
              </div>
              <div className="space-y-10">
                <div className="space-y-4">
                  <h3 className="text-2xl italic text-primary">Perfect Place to Dine</h3>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">Ambiance That Feels Like Home</h2>
                  <p className="text-muted-foreground text-lg pt-2">
                    From cozy dinners to celebrations, our ambiance sets the perfect mood for every occasion.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
                    <div className="w-14 h-14 border border-primary text-primary rounded-xl flex items-center justify-center">
                      <Leaf className="h-7 w-7" /> {/* Placeholder icon */}
                    </div>
                    <h4 className="font-bold">Cozy Atmosphere</h4>
                  </div>
                  <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
                    <div className="w-14 h-14 border border-primary text-primary rounded-xl flex items-center justify-center">
                      <Users className="h-7 w-7" />
                    </div>
                    <h4 className="font-bold">Perfect for Families</h4>
                  </div>
                  <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
                    <div className="w-14 h-14 border border-primary text-primary rounded-xl flex items-center justify-center">
                      <CalendarDays className="h-7 w-7" />
                    </div>
                    <h4 className="font-bold">Events & Parties</h4>
                  </div>
                  <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
                    <div className="w-14 h-14 border border-primary text-primary rounded-xl flex items-center justify-center">
                      <User className="h-7 w-7" />
                    </div>
                    <h4 className="font-bold">Friendly Staff</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* What We Offer */}
        <section className="w-full py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 border border-border/50 rounded-[2rem] p-8 md:p-16 relative">
            <div className="text-center space-y-4 mb-16">
              <h3 className="text-2xl italic text-primary">What We Offer</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center bg-card">
                   <div className="text-primary"><ChefHat className="h-7 w-7"/></div>
                </div>
                <h4 className="font-bold text-xl ">Dine In</h4>
                <p className="text-muted-foreground text-sm">Enjoy a relaxed dining experience in our beautifully designed restaurant.</p>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center bg-card">
                   <div className="text-primary"><Leaf className="h-7 w-7"/></div>
                </div>
                <h4 className="font-bold text-xl ">Takeaway</h4>
                <p className="text-muted-foreground text-sm">Your favorite food, packed fresh and ready to enjoy.</p>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center bg-card">
                   <div className="text-primary"><ShoppingCart className="h-7 w-7"/></div>
                </div>
                <h4 className="font-bold text-xl ">Delivery</h4>
                <p className="text-muted-foreground text-sm">Fast & reliable delivery at your doorstep.</p>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center bg-card">
                   <div className="text-primary"><ChefHat className="h-7 w-7"/></div>
                </div>
                <h4 className="font-bold text-xl ">Catering</h4>
                <p className="text-muted-foreground text-sm">Delicious food for your special events & celebrations.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Info Card / Pre-footer */}
        <div className="container mx-auto px-4 lg:px-8 -mb-16 relative z-20">
          <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-lg dark:bg-[#15171b]">
            <div className="space-y-4 text-center md:text-left md:border-r md:border-border/50 md:pr-8">
              <h4 className="text-xl font-bold">Book a Table</h4>
              <p className="text-muted-foreground text-sm">Reserve your table for a memorable dining experience.</p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-2">
                Reserve Now <CalendarDays className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-4 text-center md:text-left md:border-r md:border-border/50 md:px-8">
              <h4 className="text-xl font-bold">Opening Hours</h4>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Mon - Fri</span>
                <span>11:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Sat - Sun</span>
                <span>10:00 AM - 12:00 AM</span>
              </div>
            </div>
            <div className="space-y-4 text-center md:text-left md:pl-8">
              <h4 className="text-xl font-bold">Location</h4>
              <p className="text-muted-foreground text-sm">123, Food Street, Culinary City, Flavorland - 400001</p>
              <Link href="#" className="text-primary font-medium text-sm flex items-center justify-center md:justify-start hover:underline mt-2">
                View on Map <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
       <Footer />
    </>
  )
}