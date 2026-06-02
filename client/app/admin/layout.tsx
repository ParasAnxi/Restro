import { ReactNode } from "react"
import Link from "next/link"
import { 
  LayoutDashboard, 
  ShoppingBag, 
  CalendarDays, 
  ListOrdered, 
  Grid, 
  Users, 
  Star, 
  TicketPercent, 
  Image as ImageIcon, 
  UserCog, 
  BarChart3, 
  Settings,
  LogOut,
  Bell,
  Menu,
  ChevronDown,
  ChefHat
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const sidebarLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard, active: true },
  { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { name: "Reservations", href: "/admin/reservations", icon: CalendarDays },
  { name: "Menu Management", href: "/admin/menu", icon: ListOrdered },
  { name: "Categories", href: "/admin/categories", icon: Grid },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Reviews", href: "/admin/reviews", icon: Star },
  { name: "Coupons & Offers", href: "/admin/offers", icon: TicketPercent },
  { name: "Gallery", href: "/admin/gallery", icon: ImageIcon },
  { name: "Staff Management", href: "/admin/staff", icon: UserCog },
  { name: "Reports", href: "/admin/reports", icon: BarChart3 },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]
export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#0f1115] dark:bg-background text-foreground">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-border/10 bg-[#15171b] dark:bg-card shrink-0">
        <div className="h-20 flex items-center px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-white text-[#0f1115] p-2 rounded-full dark:bg-foreground dark:text-background">
              <ChefHat className="h-5 w-5" />
            </div>
            <div className="flex flex-col text-white dark:text-foreground">
              <span className="text-lg font-bold leading-none tracking-tight">FlavorCraft</span>
              <span className="text-[0.55rem] uppercase tracking-widest text-primary font-semibold">Restaurant</span>
            </div>
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto py-6 px-4 no-scrollbar">
          <nav className="flex flex-col gap-2">
            {sidebarLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  link.active 
                    ? "bg-primary text-primary-foreground font-medium" 
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
              >
                <link.icon className="h-5 w-5" />
                <span className="text-sm">{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-border/10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center justify-between w-full p-2 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border border-border/50">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                    <AvatarFallback>CA</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-semibold text-white dark:text-foreground">Chef Admin</span>
                    <span className="text-xs text-muted-foreground">Administrator</span>
                  </div>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card border-border/10">
              <DropdownMenuItem className="text-muted-foreground">Profile</DropdownMenuItem>
              <DropdownMenuItem className="text-muted-foreground">Settings</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive flex items-center gap-2 cursor-pointer mt-2 border-t border-border/10 pt-2">
                <LogOut className="h-4 w-4" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <button className="flex items-center gap-3 w-full px-4 py-3 mt-2 text-muted-foreground hover:text-white transition-colors">
            <LogOut className="h-5 w-5" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="h-20 border-b border-border/10 bg-[#0f1115] dark:bg-background flex items-center justify-between px-4 lg:px-8 shrink-0 relative z-10">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="lg:hidden text-muted-foreground hover:text-foreground">
              <Menu className="h-6 w-6" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-white dark:text-foreground">Dashboard</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Welcome back, Chef Admin! Here's what's happening today.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Date Picker Button Placeholder */}
            <div className="hidden sm:flex items-center gap-2 bg-[#15171b] dark:bg-card border border-border/10 rounded-xl px-4 py-2 text-sm text-muted-foreground cursor-pointer hover:border-border/30 transition-colors">
              <CalendarDays className="h-4 w-4" />
              <span>Today: 24 May, 2025</span>
              <ChevronDown className="h-4 w-4 ml-2" />
            </div>
            {/* Notifications */}
            <button className="relative w-10 h-10 rounded-full border border-border/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-muted/20 transition-all">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-background">
                8
              </span>
            </button>
          </div>
        </header>
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 no-scrollbar bg-[#0f1115] dark:bg-background text-gray-200">
          {children}
        </main>
      </div>
    </div>
  )
}