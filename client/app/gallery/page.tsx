"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChevronRight, Maximize2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const photos = [
  { id: 1, category: "food", span: "md:col-span-2 md:row-span-2", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, category: "interior", span: "md:col-span-1 md:row-span-1", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, category: "food", span: "md:col-span-1 md:row-span-1", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, category: "events", span: "md:col-span-1 md:row-span-2", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop" },
  { id: 5, category: "food", span: "md:col-span-1 md:row-span-1", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop" },
  { id: 6, category: "interior", span: "md:col-span-2 md:row-span-1", img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop" },
  { id: 7, category: "events", span: "md:col-span-1 md:row-span-1", img: "https://images.unsplash.com/photo-1530103862676-de889243703c?q=80&w=1000&auto=format&fit=crop" },
  { id: 8, category: "food", span: "md:col-span-1 md:row-span-1", img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=1000&auto=format&fit=crop" },
]

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-0">
        {/* Header Section */}
        <section className="relative w-full h-[35vh] flex items-center justify-center overflow-hidden border-b border-border/50 text-center">
          <div className="absolute inset-0 z-0 bg-[#0f1115]">
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
              alt="Gallery Background"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>
          <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-10">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">Our Gallery</h1>
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-primary" />
              <span className="text-primary">Gallery</span>
            </div>
          </div>
        </section>

        {/* Dynamic Gallery Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20 lg:py-24">
          <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">See The FlavorCraft Experience</h2>
            <p className="text-muted-foreground">Browse through our collection of memories, mouth-watering dishes, and the beautiful ambiance we offer.</p>
          </div>

          <Tabs defaultValue="all" className="w-full flex flex-col items-center">
            <TabsList className="bg-transparent gap-2 flex-wrap justify-center h-auto mb-12">
              <TabsTrigger value="all" className="rounded-full px-8 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border/50 data-[state=inactive]:hover:bg-muted text-md">All</TabsTrigger>
              <TabsTrigger value="food" className="rounded-full px-8 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border/50 data-[state=inactive]:hover:bg-muted text-md">Food & Drinks</TabsTrigger>
              <TabsTrigger value="interior" className="rounded-full px-8 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border/50 data-[state=inactive]:hover:bg-muted text-md">Interior</TabsTrigger>
              <TabsTrigger value="events" className="rounded-full px-8 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border/50 data-[state=inactive]:hover:bg-muted text-md">Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="w-full mt-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                {photos.map((photo) => (
                  <div key={photo.id} className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-border/20 ${photo.span}`}>
                    <Image src={photo.img} alt={`Gallery Image ${photo.id}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="food" className="w-full mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {photos.filter(p => p.category === 'food').map((photo) => (
                  <div key={photo.id} className={`relative h-[300px] rounded-2xl overflow-hidden group cursor-pointer border border-border/20`}>
                    <Image src={photo.img} alt={`Food Image ${photo.id}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="interior" className="w-full mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {photos.filter(p => p.category === 'interior').map((photo) => (
                  <div key={photo.id} className={`relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer border border-border/20`}>
                    <Image src={photo.img} alt={`Interior Image ${photo.id}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="w-full mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {photos.filter(p => p.category === 'events').map((photo) => (
                  <div key={photo.id} className={`relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer border border-border/20`}>
                    <Image src={photo.img} alt={`Event Image ${photo.id}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </>
  )
}
