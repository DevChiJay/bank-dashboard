"use client"

import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-teal-50 min-h-screen">
      <Navbar />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Get paid early save automatically all your pay.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Supports small businesses with simple invoicing, powerful
                integrations, and cash flow management tools.
              </p>
            </div>

            {/* Email Input Section */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input
                type="email"
                placeholder="Your business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 text-base"
              />
              <Button
                variant="default"
                size="lg"
                className="bg-teal-600 hover:bg-teal-700"
                onClick={() => console.log("Get Started clicked")}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Partner Logos */}
            <div className="pt-8">
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-2xl font-bold text-gray-800">Klarna.</div>
                <div className="text-2xl font-bold text-gray-800">coinbase</div>
                <div className="text-2xl font-bold text-gray-800">
                  instacart
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Mobile App Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-white rounded-[3rem] shadow-2xl p-6 relative overflow-hidden">
                {/* Status Bar */}
                <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
                  <span>9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                    <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                    <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                  </div>
                </div>

                {/* Credit Card */}
                <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl p-6 text-white mb-6 relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <div className="text-xs opacity-80">Credit Card</div>
                  </div>

                  <div className="mt-8">
                    <div className="text-xs opacity-80 mb-1">Dipa Inhouse</div>
                    <div className="text-xs opacity-60">
                      dipa.inhouse@gmail.com
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="text-2xl font-bold mb-2">$1,876,580</div>
                    <div className="text-xs opacity-80">April 21, 2024</div>
                  </div>

                  <div className="flex justify-between items-end mt-6">
                    <div className="text-lg tracking-wider">234 •••• ••••</div>
                    <div className="text-right">
                      <div className="text-xs font-bold">VISA</div>
                      <div className="w-8 h-6 bg-white/20 rounded mt-1"></div>
                    </div>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded"></div>
                      <span className="font-medium">Credit Card</span>
                    </div>
                    <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded"></div>
                      <span className="font-medium">Bank Account</span>
                    </div>
                  </div>
                </div>

                {/* Pay Button */}
                <Button className="w-full bg-gray-900 text-white py-4 rounded-xl font-medium mt-6">
                  Pay
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
