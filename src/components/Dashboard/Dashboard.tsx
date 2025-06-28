"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ArrowUpDown, Settings, Plus, Search, MoreHorizontal, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const transactions = [
  {
    id: 1,
    title: "Materials",
    date: "June 07, 2025",
    amount: "-164,000.00",
    currency: "NGN",
    status: "Approved",
  },
  {
    id: 2,
    title: "Family Support",
    date: "June 07, 2025",
    amount: "-13,500.00",
    currency: "NGN",
    status: "Approved",
  },
  {
    id: 3,
    title: "Paying Distribution",
    date: "Mar 06, 2025",
    amount: "-212,950.00",
    currency: "NGN",
    status: "Pending",
  },
]

const stockData = [
  { time: "1m", active: true },
  { time: "30m", active: false },
  { time: "1h", active: false },
  { time: "D", active: false },
]

export default function Dashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1m")

  return (
    <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
      {/* Welcome Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">Welcome!</p>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">John B Doe</h1>
            <p className="text-gray-600">At a glance summary of your Cooperate Business Account.</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              className="bg-slate-700 hover:bg-slate-800 text-white"
              onClick={() => console.log("Deposit clicked")}
            >
              Deposit <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" onClick={() => console.log("Transfer clicked")}>
              Transfer <ArrowUpDown className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => console.log("Settings clicked")}>
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Overview Card */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Overview</h2>
          <Card className="bg-gradient-to-br from-emerald-300 to-emerald-500 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/user-avatar.png"
                    alt="Profile"
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-white/20"
                  />
                  <div>
                    <div className="text-sm opacity-90 mb-1">Available balance</div>
                    <div className="text-2xl font-bold mb-1">NGN863,950.95</div>
                    <div className="text-sm opacity-90">John B Doe</div>
                    <div className="text-xs opacity-75">035***77</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm opacity-90 mb-2">Current Session</div>
                  <div className="text-sm font-medium">Sat Jun 28 2025</div>
                  <div className="text-sm opacity-90 mt-4 mb-1">User Location</div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Lagos</span>
                    <Image src="/nigeria-flag.svg" alt="Flag" width={50} height={50} className="rounded-full" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Loans and Credit */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Loans and lines of credit</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-medium">?</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Business Support Loan</div>
                      <div className="text-2xl font-bold text-gray-900">
                        +30,000 <span className="text-sm font-normal text-gray-500">NGN</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm font-medium">?</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">FICO Credit Score</div>
                      <div className="text-2xl font-bold text-gray-900">750</div>
                    </div>
                  </div>
                  <div className="w-12 h-2 bg-green-500 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Most Recent Transactions */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Most Recent</h2>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">{transaction.title}</div>
                        <div className="text-sm text-gray-500">{transaction.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">
                          {transaction.amount} {transaction.currency}
                        </div>
                        <div
                          className={`text-xs px-2 py-1 rounded-full inline-block ${
                            transaction.status === "Approved"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {transaction.status}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                <Button variant="ghost" size="sm" className="w-full text-blue-600 hover:text-blue-800 hover:bg-blue-50" onClick={() => console.log("View all transactions")}>
                  View all transactions <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stock Today */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Stock Today</h2>
          <Card>
            <CardContent className="p-4">
              {/* Stock Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="AAPL"
                      className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <Button size="icon" variant="outline">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  {stockData.map((item) => (
                    <button
                      key={item.time}
                      onClick={() => setSelectedTimeframe(item.time)}
                      className={`px-3 py-1 text-xs rounded cursor-pointer transition-colors ${
                        selectedTimeframe === item.time
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {item.time}
                    </button>
                  ))}
                  <Button size="icon" variant="outline">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Stock Info */}
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                  <span className="font-medium">Apple Inc</span>
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-xs text-gray-500">D</span>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-sm text-gray-500">O</span>
                  <span className="text-sm">201.89</span>
                  <span className="text-sm text-red-600">H 203.22</span>
                  <span className="text-sm text-green-600">L 200.00</span>
                  <span className="text-sm text-red-600">C 201.08</span>
                  <span className="text-sm text-red-600">-0.08 (-0.04%)</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">Vol 73.18M</div>
              </div>

              {/* Mock Chart */}
              <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-gray-400 text-sm">Stock Chart Placeholder</div>
              </div>

              {/* Price Levels */}
              <div className="flex justify-between text-xs text-gray-500">
                <span>216.00</span>
                <span>212.00</span>
                <span>208.00</span>
                <span>204.00</span>
              </div>
            </CardContent>
          </Card>
        </div>
        

          {/* Virtual Card */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Virtual Card</h2>
            <Card className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white overflow-hidden border-0">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="text-sm opacity-80 mb-1">Business Visa</div>
                    <div className="text-xs opacity-70">Virtual</div>
                  </div>
                  <CreditCard className="h-8 w-8 opacity-80" />
                </div>
                <div className="mb-6">
                  <div className="text-lg tracking-widest mb-4">**** **** **** 3582</div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <div className="opacity-70 mb-1">Card Holder</div>
                      <div>JOHN B DOE</div>
                    </div>
                    <div>
                      <div className="opacity-70 mb-1">Expires</div>
                      <div>12/28</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-xs opacity-80">Powered by ATBank™</div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost" className="text-white border border-white/30 hover:bg-white/10">
                      Freeze
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white border border-white/30 hover:bg-white/10">
                      Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
      </div>

      {/* Footer */}
      <div className="mt-10 py-4 text-center text-sm text-gray-500 border-t border-gray-200">
        © 2025 ATBank. All rights reserved.
      </div>
    </div>
  )
}
