"use client"

import { useState } from "react"
import Image from "next/image"
import {
  LayoutDashboard,
  Send,
  CreditCard,
  History,
  FileCheck,
  Building2,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Bitcoin,
  SquareUser,
  Settings,
  ShieldCheck,
  LogOut,
  BanknoteArrowUp,
  ChevronDown,
  ChevronLeft,
  ChevronLeftSquare,
  ChevronRightSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type NavigationItem = {
  name: string;
  href: string;
  icon: React.ElementType;
  current?: boolean;
  hasSubmenu?: boolean;
  submenu?: {name: string; href: string;}[];
}

type NavigationSection = {
  name: string;
  items: NavigationItem[];
}

type SidebarProps = {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const navigation: NavigationSection[] = [
  {
    name: "MAIN",
    items: [{ name: "Dashboard", href: "#", icon: LayoutDashboard, current: true }],
  },
  {
    name: "TRANSACTIONS",
    items: [
      { 
        name: "Send Money", 
        href: "#", 
        icon: Send, 
        hasSubmenu: true,
        submenu: [
          { name: "Local Transfer", href: "#" },
          { name: "International Transfer", href: "#" },
          { name: "Direct Debit", href: "#" },
        ]
      },
      { name: "Deposit Check", href: "#", icon: BanknoteArrowUp },
      { name: "Transaction History", href: "#", icon: History },
    ],
  },
  {
    name: "ACCOUNT MANAGEMENT",
    items: [
      { name: "KYC Status", href: "#", icon: FileCheck },
      { name: "Virtual Card", href: "#", icon: CreditCard },
      { name: "Loan/Credit Financing", href: "#", icon: Building2 },
      { 
        name: "Cryptocurrenty", 
        href: "#", 
        icon: Bitcoin, 
        hasSubmenu: true,
        submenu: [
          { name: "Buy Crypto", href: "#" },
          { name: "Sell Crypto", href: "#" },
          { name: "Crypto Wallet", href: "#" },
        ]
      }
    ],
  },
  {
    name: "USER & AUTHENTICATION",
    items: [
      { name: "Profile", href: "#", icon: SquareUser },
      { name: "Account Settings", href: "#", icon: Settings  },
      { name: "Reset Password", href: "#", icon: ShieldCheck },
      { name: "Logout", href: "#", icon: LogOut }
    ]
  }
]

export default function Sidebar({ collapsed, onToggleCollapse }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("Dashboard")
  const [openSubmenus, setOpenSubmenus] = useState<string[]>([])

  const toggleSubmenu = (itemName: string) => {
    if (collapsed) return;
    
    setOpenSubmenus(prev => 
      prev.includes(itemName)
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    )
  }

  const isSubmenuOpen = (itemName: string) => {
    return !collapsed && openSubmenus.includes(itemName)
  }

  return (
    <div className="bg-white border-r border-gray-200 h-screen flex flex-col relative">
      {/* Toggle collapse button */}
      <button 
        onClick={onToggleCollapse}
        className="absolute -right-3 top-20 bg-white rounded-full p-1 shadow-md border border-gray-200 z-10 hover:bg-gray-50"
      >
        {collapsed ? 
          <ChevronRightSquare className="w-5 h-5 text-gray-600" /> : 
          <ChevronLeftSquare className="w-5 h-5 text-gray-600" />
        }
      </button>
      
      {/* Logo */}
      <div className={cn("p-6", collapsed && "flex justify-center items-center p-4")}>
        {collapsed ? (
          <Image src="/logo-icon.svg" alt="ATB" width={30} height={30} className="h-8 w-auto" />
        ) : (
          <Image src="/logo.svg" alt="Access Top Bank" width={120} height={40} className="h-10 w-auto" />
        )}
      </div>

      {/* Available Balance */}
      {!collapsed && (
        <div className="p-6 border-b border-gray-200">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Available Balance</p>
              <div className="flex items-baseline space-x-2">
                <span className="text-xs text-gray-500">NGN</span>
                <span className="text-2xl font-bold text-gray-900">863,950.95</span>
                <TrendingUp className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Income</span>
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-medium text-green-600">0%</span>
                  <TrendingUp className="w-3 h-3 text-green-600" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Debit</span>
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-medium text-red-600">0%</span>
                  <TrendingDown className="w-3 h-3 text-red-600" />
                </div>
              </div>
            </div>

            <div className="flex space-x-2 pt-2">
              <Button
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium"
                onClick={() => console.log("Send Funds clicked")}
              >
                SEND FUNDS
              </Button>
              <Button
                variant="secondary"
                className="flex-1 bg-slate-700 hover:bg-slate-800 text-white text-sm font-medium"
                onClick={() => console.log("Active clicked")}
              >
                ACTIVE
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Collapsed Balance */}
      {collapsed && (
        <div className="py-4 border-b border-gray-200 flex flex-col items-center">
          <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">Balance</p>
          <p className="text-sm font-bold text-gray-900">₦863,950</p>
        </div>
      )}

      {/* Navigation */}
      <nav className={cn("flex-1 p-4 space-y-6 overflow-y-auto", collapsed && "p-2 space-y-4")}>
        {navigation.map((section) => (
          <div key={section.name}>
            {!collapsed && (
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">{section.name}</h3>
            )}
            <ul className={cn("space-y-1", collapsed && "space-y-3")}>
              {section.items.map((item) => (
                <li key={item.name} className="space-y-1">
                  <button
                    onClick={() => {
                      if (item.hasSubmenu && !collapsed) {
                        toggleSubmenu(item.name)
                      } else {
                        setActiveItem(item.name)
                      }
                    }}
                    className={cn(
                      "w-full flex items-center justify-between transition-colors cursor-pointer",
                      collapsed ? "px-0 py-2 flex-col justify-center" : "px-3 py-2 text-sm font-medium rounded-lg",
                      (activeItem === item.name || isSubmenuOpen(item.name))
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900",
                    )}
                    title={collapsed ? item.name : ""}
                  >
                    <div className={cn(
                      "flex items-center", 
                      collapsed ? "flex-col space-y-1" : "space-x-3"
                    )}>
                      <item.icon className={cn("w-5 h-5", collapsed && "mx-auto")} />
                      {!collapsed && <span>{item.name}</span>}
                      {collapsed && <span className="text-[10px]">{item.name.split(' ')[0]}</span>}
                    </div>
                    {item.hasSubmenu && !collapsed && (
                      isSubmenuOpen(item.name) 
                        ? <ChevronDown className="w-4 h-4" /> 
                        : <ChevronRight className="w-4 h-4" />
                    )}
                  </button>

                  {/* Submenu */}
                  {item.hasSubmenu && isSubmenuOpen(item.name) && item.submenu && (
                    <ul className="ml-8 space-y-1 mt-1">
                      {item.submenu.map((subitem) => (
                        <li key={subitem.name}>
                          <button
                            onClick={() => setActiveItem(subitem.name)}
                            className={cn(
                              "w-full text-left px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer",
                              activeItem === subitem.name
                                ? "bg-blue-50 text-blue-700"
                                : "text-gray-700 hover:bg-gray-50 hover:text-gray-900",
                            )}
                          >
                            {subitem.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  )
}
