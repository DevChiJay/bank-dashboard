"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Info, X } from "lucide-react";

export default function Header() {
  const [showBanner, setShowBanner] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header
      className={`bg-white border-b border-gray-200 ${!showBanner && "px-6"}`}
    >
      {/* Main Header */}
      <div className="flex items-center justify-end py-2">
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 rounded-lg px-3 transition-colors h-[60px]"
          >
            <Image
              src="/user-avatar.png"
              alt="User Avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="text-right">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-green-500 font-medium">
                  Online
                </span>
              </div>
              <div className="text-sm font-medium text-gray-900">
                John B Doe
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                Profile Settings
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                Account Settings
              </button>
              <hr className="my-2" />
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>

      {/* News Banner */}
      {showBanner && (
        <div className="bg-blue-50 border-b border-blue-100 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Info className="w-5 h-5 text-blue-600" />
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-blue-900">
                  Here is the latest news for 2025?
                </span>
                <span className="text-sm text-blue-600">
                  An overview of our recovery mission is now available on ...
                </span>
                <button className="text-blue-600 hover:text-blue-800 cursor-pointer">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              className="text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
