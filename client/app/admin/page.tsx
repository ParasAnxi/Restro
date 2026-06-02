"use client"
import Image from "next/image"
import { 
  ShoppingBag, 
  DollarSign, 
  CalendarDays, 
  Users, 
  ArrowUp, 
  MoreVertical,
  Pencil,
  Trash2,
  Plus,
  Star,
  ListOrdered
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts"
const salesData = [
  { name: "18 May", revenue: 10000, orders: 120 },
  { name: "19 May", revenue: 40000, orders: 200 },
  { name: "20 May", revenue: 55000, orders: 250 },
  { name: "21 May", revenue: 50000, orders: 220 },
  { name: "22 May", revenue: 80000, orders: 380 },
  { name: "23 May", revenue: 60000, orders: 300 },
  { name: "24 May", revenue: 78450, orders: 350 },
]
const staffData = [
  { name: "Chefs", value: 8, color: "#3b82f6" },
  { name: "Waiters", value: 10, color: "#22c55e" },
  { name: "Managers", value: 3, color: "#10b981" },
  { name: "Others", value: 3, color: "#f59e0b" },
]
const recentOrders = [
  { id: "#ORD-1245", customer: "Arjun Mehta", items: "2 Items", price: 850, status: "Completed", statusColor: "bg-green-500/10 text-green-500" },
  { id: "#ORD-1244", customer: "Sneha Kapoor", items: "3 Items", price: 1250, status: "Preparing", statusColor: "bg-yellow-500/10 text-yellow-500" },
  { id: "#ORD-1243", customer: "Rohan Singh", items: "1 Item", price: 450, status: "On the Way", statusColor: "bg-blue-500/10 text-blue-500" },
  { id: "#ORD-1242", customer: "Priya Sharma", items: "2 Items", price: 920, status: "Completed", statusColor: "bg-green-500/10 text-green-500" },
  { id: "#ORD-1241", customer: "Karan Verma", items: "4 Items", price: 1680, status: "Cancelled", statusColor: "bg-red-500/10 text-red-500" },
]
const upcomingReservations = [
  { time: "07:00 PM", name: "Rahul & Family", people: "4 People", status: "Confirmed", statusColor: "bg-green-500/10 text-green-500" },
  { time: "07:30 PM", name: "Ananya Jain", people: "2 People", status: "Confirmed", statusColor: "bg-green-500/10 text-green-500" },
  { time: "08:00 PM", name: "Vikram Joshi", people: "6 People", status: "Pending", statusColor: "bg-yellow-500/10 text-yellow-500" },
  { time: "08:30 PM", name: "Neha & Friends", people: "5 People", status: "Confirmed", statusColor: "bg-green-500/10 text-green-500" },
  { time: "09:00 PM", name: "Amit Patel", people: "3 People", status: "Pending", statusColor: "bg-yellow-500/10 text-yellow-500" },
]
const menuItems = [
  { id: 1, name: "Chicken Biryani", category: "Main Course", price: 349, status: "Active", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=100&h=100&fit=crop" },
  { id: 2, name: "Paneer Tikka", category: "Starters", price: 299, status: "Active", img: "https://images.unsplash.com/photo-1599487405270-87dcba8721c8?w=100&h=100&fit=crop" },
  { id: 3, name: "Creamy Alfredo Pasta", category: "Main Course", price: 349, status: "Active", img: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=100&h=100&fit=crop" },
  { id: 4, name: "Chocolate Lava Cake", category: "Desserts", price: 249, status: "Active", img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=100&h=100&fit=crop" },
  { id: 5, name: "Mojito", category: "Beverages", price: 149, status: "Active", img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=100&h=100&fit=crop" },
]
export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#15171b] border border-border/10 rounded-2xl p-6 dark:bg-card">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <button className="text-muted-foreground hover:text-white"><MoreVertical className="w-5 h-5" /></button>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Total Orders</p>
          <h3 className="text-3xl font-bold text-white dark:text-foreground mb-4">126</h3>
          <p className="text-xs text-green-500 flex items-center">
            <ArrowUp className="w-3 h-3 mr-1" /> 23.5% <span className="text-muted-foreground ml-1">from yesterday</span>
          </p>
        </div>
        <div className="bg-[#15171b] border border-border/10 rounded-2xl p-6 dark:bg-card">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
              <DollarSign className="w-6 h-6" />
            </div>
            <button className="text-muted-foreground hover:text-white"><MoreVertical className="w-5 h-5" /></button>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
          <h3 className="text-3xl font-bold text-white dark:text-foreground mb-4">₹ 78,450</h3>
          <p className="text-xs text-green-500 flex items-center">
            <ArrowUp className="w-3 h-3 mr-1" /> 18.7% <span className="text-muted-foreground ml-1">from yesterday</span>
          </p>
        </div>
        <div className="bg-[#15171b] border border-border/10 rounded-2xl p-6 dark:bg-card">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
              <CalendarDays className="w-6 h-6" />
            </div>
            <button className="text-muted-foreground hover:text-white"><MoreVertical className="w-5 h-5" /></button>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Reservations</p>
          <h3 className="text-3xl font-bold text-white dark:text-foreground mb-4">32</h3>
          <p className="text-xs text-green-500 flex items-center">
            <ArrowUp className="w-3 h-3 mr-1" /> 12.3% <span className="text-muted-foreground ml-1">from yesterday</span>
          </p>
        </div>
        <div className="bg-[#15171b] border border-border/10 rounded-2xl p-6 dark:bg-card">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
              <Users className="w-6 h-6" />
            </div>
            <button className="text-muted-foreground hover:text-white"><MoreVertical className="w-5 h-5" /></button>
          </div>
          <p className="text-sm text-muted-foreground mb-1">New Customers</p>
          <h3 className="text-3xl font-bold text-white dark:text-foreground mb-4">18</h3>
          <p className="text-xs text-green-500 flex items-center">
            <ArrowUp className="w-3 h-3 mr-1" /> 8.6% <span className="text-muted-foreground ml-1">from yesterday</span>
          </p>
        </div>
      </div>
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#15171b] border border-border/10 rounded-2xl p-6 dark:bg-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white dark:text-foreground">Sales Overview</h3>
            <div className="bg-background border border-border/10 rounded-lg px-3 py-1.5 text-xs text-muted-foreground cursor-pointer">
              7 Days <span className="ml-1">▼</span>
            </div>
          </div>
          <div className="flex items-center gap-6 mb-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-muted-foreground">Revenue (₹)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-muted-foreground/50"></div>
              <span className="text-muted-foreground">Orders</span>
            </div>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2e37" vertical={false} />
                <XAxis dataKey="name" stroke="#8b949e" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#8b949e" fontSize={12} tickLine={false} axisLine={false} dx={-10} tickFormatter={(value) => `${value/1000}K`} />
                <Tooltip contentStyle={{ backgroundColor: '#1a1d24', border: '1px solid #2a2e37', borderRadius: '8px' }} />
                <Line type="monotone" dataKey="revenue" stroke="#fbbf24" strokeWidth={3} dot={{ r: 4, fill: '#fbbf24' }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="orders" stroke="#8b949e" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 3, fill: '#8b949e' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-[#15171b] border border-border/10 rounded-2xl p-6 dark:bg-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white dark:text-foreground">Top Selling Dishes</h3>
            <Button variant="outline" size="sm" className="h-8 border-border/10 bg-transparent hover:bg-muted/20">View All</Button>
          </div>
          <div className="space-y-4">
            {menuItems.slice(0, 4).map((item, i) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-border/10">
                  <Image src={item.img} alt={item.name} width={48} height={48} className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-white dark:text-foreground truncate">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">{100 - i * 15} Orders</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#15171b] border border-border/10 rounded-2xl p-6 dark:bg-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white dark:text-foreground">Recent Orders</h3>
            <Button variant="outline" size="sm" className="h-8 border-border/10 bg-transparent hover:bg-muted/20">View All</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border/10 last:border-0 hover:bg-muted/5 transition-colors">
                    <td className="py-4 text-muted-foreground">{order.id}</td>
                    <td className="py-4 text-white dark:text-foreground">{order.customer}</td>
                    <td className="py-4 text-muted-foreground">{order.items}</td>
                    <td className="py-4 text-white dark:text-foreground">₹ {order.price}</td>
                    <td className="py-4 text-right">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${order.statusColor}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-[#15171b] border border-border/10 rounded-2xl p-6 dark:bg-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white dark:text-foreground">Upcoming Reservations</h3>
            <Button variant="outline" size="sm" className="h-8 border-border/10 bg-transparent hover:bg-muted/20">View All</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <tbody>
                {upcomingReservations.map((res, i) => (
                  <tr key={i} className="border-b border-border/10 last:border-0 hover:bg-muted/5 transition-colors">
                    <td className="py-4 text-muted-foreground">{res.time}</td>
                    <td className="py-4 text-white dark:text-foreground">{res.name}</td>
                    <td className="py-4 text-muted-foreground">{res.people}</td>
                    <td className="py-4 text-right">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${res.statusColor}`}>
                        {res.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Menu Management & Reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#15171b] border border-border/10 rounded-2xl p-6 dark:bg-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white dark:text-foreground">Menu Management</h3>
            <Button variant="outline" size="sm" className="h-8 border-border/10 bg-transparent hover:bg-muted/20">View All</Button>
          </div>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-muted-foreground border-b border-border/10">
                  <th className="pb-3 font-medium">Dish Name</th>
                  <th className="pb-3 font-medium">Category</th>
                  <th className="pb-3 font-medium">Price</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {menuItems.map((item) => (
                  <tr key={item.id} className="border-b border-border/10 last:border-0 hover:bg-muted/5 transition-colors">
                    <td className="py-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-border/10">
                        <Image src={item.img} alt={item.name} width={40} height={40} className="object-cover" />
                      </div>
                      <span className="text-white dark:text-foreground">{item.name}</span>
                    </td>
                    <td className="py-4 text-muted-foreground">{item.category}</td>
                    <td className="py-4 text-white dark:text-foreground">₹{item.price}</td>
                    <td className="py-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 rounded-md border border-primary/30 text-primary hover:bg-primary/10 transition-colors">
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 rounded-md border border-destructive/30 text-destructive hover:bg-destructive/10 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
            <Plus className="w-4 h-4 mr-2" /> Add New Dish
          </Button>
        </div>
        <div className="bg-[#15171b] border border-border/10 rounded-2xl p-6 dark:bg-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white dark:text-foreground">Customer Reviews</h3>
            <Button variant="outline" size="sm" className="h-8 border-border/10 bg-transparent hover:bg-muted/20">View All</Button>
          </div>
          <div className="space-y-6">
            {/* Review 1 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-border/10">
                <Image src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" alt="Arjun" width={40} height={40} />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold text-white dark:text-foreground">Arjun Mehta</h4>
                  <span className="text-xs text-muted-foreground">24 May, 2025</span>
                </div>
                <div className="flex items-center gap-1 text-primary mb-2">
                  {[1,2,3,4,5].map(i=><Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Amazing food and excellent service. The biryani was just perfect!
                </p>
              </div>
            </div>
            {/* Review 2 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-border/10">
                <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Sneha" width={40} height={40} />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold text-white dark:text-foreground">Sneha Kapoor</h4>
                  <span className="text-xs text-muted-foreground">23 May, 2025</span>
                </div>
                <div className="flex items-center gap-1 text-primary mb-2">
                  {[1,2,3,4,5].map(i=><Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Loved the ambiance and the pasta was incredible. Will visit again!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-8">
        <div className="bg-[#15171b] border border-border/10 rounded-2xl p-6 dark:bg-card flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white dark:text-foreground">Staff Overview</h3>
            <Button variant="outline" size="sm" className="h-8 border-border/10 bg-transparent hover:bg-muted/20">View All</Button>
          </div>
          <div className="flex-1 flex items-center justify-center relative min-h-[200px]">
             <div className="absolute inset-0 flex items-center justify-center flex-col z-10 pointer-events-none">
               <span className="text-xs text-muted-foreground">Total Staff</span>
               <span className="text-3xl font-bold text-white dark:text-foreground">24</span>
             </div>
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie
                   data={staffData}
                   cx="50%"
                   cy="50%"
                   innerRadius={60}
                   outerRadius={80}
                   paddingAngle={5}
                   dataKey="value"
                 >
                   {staffData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                   ))}
                 </Pie>
                 <Tooltip contentStyle={{ backgroundColor: '#1a1d24', border: '1px solid #2a2e37', borderRadius: '8px' }} />
               </PieChart>
             </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {staffData.map(stat => (
              <div key={stat.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stat.color }}></div>
                  <span className="text-muted-foreground">{stat.name}</span>
                </div>
                <span className="font-bold text-white dark:text-foreground">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 bg-[#15171b] border border-border/10 rounded-2xl p-6 dark:bg-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white dark:text-foreground">Recent Activity</h3>
          </div>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border/30 before:to-transparent">
            {/* Activity 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border/30 bg-muted/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm text-muted-foreground">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border/10 bg-muted/5">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold text-white dark:text-foreground">New order #ORD-1245 has been placed</h4>
                  <span className="text-xs text-muted-foreground">2 mins ago</span>
                </div>
              </div>
            </div>
            {/* Activity 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border/30 bg-muted/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm text-muted-foreground">
                <CalendarDays className="w-4 h-4 text-red-400" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border/10 bg-muted/5">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold text-white dark:text-foreground">Reservation by Rahul & Family at 07:00 PM</h4>
                  <span className="text-xs text-muted-foreground">10 mins ago</span>
                </div>
              </div>
            </div>
            {/* Activity 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border/30 bg-muted/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm text-muted-foreground">
                <ListOrdered className="w-4 h-4 text-green-400" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border/10 bg-muted/5">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold text-white dark:text-foreground">Menu item "Mojito" has been updated</h4>
                  <span className="text-xs text-muted-foreground">1 hour ago</span>
                </div>
              </div>
            </div>
            {/* Activity 4 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border/30 bg-muted/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm text-muted-foreground">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border/10 bg-muted/5">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold text-white dark:text-foreground">New review received from Arjun Mehta</h4>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}