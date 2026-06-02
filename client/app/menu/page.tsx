import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ShoppingCart, Heart, LayoutGrid, List, ArrowRight, RefreshCcw, Star, Crown } from "lucide-react"
export default function MenuPage() {
  const menuItems = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    name: "Chicken Biryani",
    desc: "Aromatic basmati rice cooked with spices & tender chicken.",
    price: 349,
    rating: 4.8,
    reviews: 120,
    bestseller: i === 0,
    liked: i === 3 || i === 7,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  }))
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-32">
        {/* Header Section */}
        <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center overflow-hidden border-b border-border/50">
          <div className="absolute inset-0 z-0 bg-[#0f1115]">
            <Image
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop"
              alt="Menu Background"
              fill
              className="object-cover opacity-30"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1115] via-[#0f1115]/90 to-transparent" />
          </div>
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl italic text-primary mb-2">Good Food, Great Mood</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Our Menu</h1>
            <p className="text-gray-400 max-w-md text-lg">
              Explore our chef-crafted dishes made with the freshest ingredients.
            </p>
          </div>
        </section>
        {/* Main Content */}
        <div className="container mx-auto px-4 lg:px-8 py-12 flex flex-col lg:flex-row gap-8 relative">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-card border border-border/50 rounded-2xl p-6 sticky top-28">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-border/50">
                <h3 className="font-bold text-xl">Filter</h3>
                <RefreshCcw className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
              </div>
              <div className="space-y-6">
                {/* Categories */}
                <div>
                  <h4 className="font-semibold mb-4">Categories</h4>
                  <div className="space-y-3">
                    {[
                      { name: "All", count: 48, active: true },
                      { name: "Biryani", count: 12 },
                      { name: "Starters", count: 10 },
                      { name: "Main Course", count: 14 },
                      { name: "Desserts", count: 6 },
                      { name: "Beverages", count: 6 },
                    ].map((cat) => (
                      <div key={cat.name} className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${cat.active ? 'bg-primary border-primary' : 'border-muted-foreground/50 group-hover:border-primary'}`}>
                            {cat.active && <div className="w-2 h-2 bg-primary-foreground rounded-full" />}
                          </div>
                          <span className={`text-sm ${cat.active ? 'text-foreground font-medium' : 'text-muted-foreground group-hover:text-foreground transition-colors'}`}>{cat.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{cat.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-px w-full bg-border/50" />
                {/* Price Range */}
                <div>
                  <h4 className="font-semibold mb-4">Price Range</h4>
                  <Slider defaultValue={[200, 1200]} max={2000} step={10} className="mb-4" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₹200</span>
                    <span>₹1200+</span>
                  </div>
                </div>
                <div className="h-px w-full bg-border/50" />
                {/* Dietary Preference */}
                <div>
                  <h4 className="font-semibold mb-4">Dietary Preference</h4>
                  <div className="space-y-3">
                    {["Veg", "Non-Veg", "Gluten Free", "Spicy", "Jain"].map((pref) => (
                      <div key={pref} className="flex items-center space-x-2">
                        <Checkbox id={`pref-${pref}`} />
                        <label
                          htmlFor={`pref-${pref}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                        >
                          {pref}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-px w-full bg-border/50" />
                {/* Sort By */}
                <div>
                  <h4 className="font-semibold mb-4">Sort By</h4>
                  <Select defaultValue="popularity">
                    <SelectTrigger className="w-full bg-background border-border/50 rounded-xl">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popularity">Popularity</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" className="w-full rounded-xl border-border/50 hover:bg-background mt-4">
                  <RefreshCcw className="w-4 h-4 mr-2" /> Clear Filters
                </Button>
              </div>
            </div>
          </aside>
          {/* Menu Grid */}
          <div className="flex-grow">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-card border border-border/50 p-4 rounded-2xl">
              <p className="text-muted-foreground text-sm">48 Items Found</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 border border-border/50 rounded-xl p-1 bg-background">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg bg-primary/20 text-primary hover:bg-primary/30">
                    <LayoutGrid className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-background">
                    <List className="w-4 h-4" />
                  </Button>
                </div>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-[140px] bg-background border-border/50 rounded-xl">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Popular</SelectItem>
                    <SelectItem value="new">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {menuItems.map((item) => (
                <div key={item.id} className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm flex flex-col group/card relative">
                  {item.bestseller && (
                    <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Bestseller
                    </div>
                  )}
                  <button className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary transition-colors">
                    <Heart className={`h-4 w-4 ${item.liked ? 'fill-red-500 text-red-500' : ''}`} />
                  </button>
                  <div className="relative h-48 w-full overflow-hidden bg-background">
                    <Image src={item.image} alt={item.name} fill className="object-cover transition-transform group-hover/card:scale-110" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold mb-1">{item.name}</h4>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{item.desc}</p>
                    <div className="flex items-center gap-1 mb-4 text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                      ))}
                      <span className="text-muted-foreground text-xs ml-1">({item.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <span className="font-bold text-xl">₹{item.price}</span>
                      <Button className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-4 h-10">
                        <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Promotional Banner */}
            <div className="mt-12 bg-gradient-to-r from-[#1a1c23] to-[#252830] border border-border/50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 dark:from-card dark:to-card/50">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Crown className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-white dark:text-foreground">Hungry for more?</h3>
                  <p className="text-gray-400 dark:text-muted-foreground">Get flat 15% off on your first order!</p>
                </div>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 w-full md:w-auto text-md">
                Order Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      {/* Sticky Cart Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.3)] transform translate-y-0 transition-transform">
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-border hidden sm:block">
              <Image src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=100&auto=format&fit=crop" alt="Cart item" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium">3 Items in Cart</span>
              <button className="text-sm text-primary hover:underline flex items-center">
                View Cart <ArrowRight className="w-3 h-3 ml-1" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-sm text-muted-foreground">Total</span>
              <span className="font-bold text-xl">₹ 1,047</span>
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
