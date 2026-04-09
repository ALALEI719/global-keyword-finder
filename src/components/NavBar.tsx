"use client"
import { useState } from "react"
import { Globe2, LogOut, User } from "lucide-react"
import AuthModal from "./AuthModal"

interface NavBarProps {
  userEmail?: string | null
  onLogout?: () => void
}

export default function NavBar({ userEmail, onLogout }: NavBarProps) {
  const [showAuth, setShowAuth] = useState(false)

  return (
    <>
      <nav className="w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-indigo-400" />
            <span className="font-bold text-slate-100 text-sm">Multi-Language Keyword Finder</span>
          </div>
          <div className="flex items-center gap-3">
            {userEmail ? (
              <>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <User className="w-3.5 h-3.5" />
                  <span>{userEmail}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 border border-slate-700 rounded-lg hover:border-slate-500 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" /> Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowAuth(true)}
                className="px-4 py-1.5 text-sm font-medium border border-slate-600 text-slate-200 rounded-lg hover:border-indigo-500 hover:text-indigo-300 transition-colors"
              >
                Login / Register
              </button>
            )}
          </div>
        </div>
      </nav>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  )
}
