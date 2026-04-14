"use client"
import { useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { LogOut, User } from "lucide-react"
import { Link } from "@/i18n/navigation"
import AuthModal from "./AuthModal"
import LanguageSwitcher from "./LanguageSwitcher"

interface NavBarProps {
  userEmail?: string | null
  onLogout?: () => void
}

export default function NavBar({ userEmail, onLogout }: NavBarProps) {
  const [showAuth, setShowAuth] = useState(false)
  const t = useTranslations("Nav")

  return (
    <>
      <nav className="w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2.5 min-w-0 hover:opacity-90 transition-opacity">
            <Image
              src="/logo-nav.png"
              alt="Multi-Language Keyword Finder"
              width={32}
              height={32}
              className="h-8 w-8 shrink-0 rounded-lg object-contain"
              priority
            />
            <span className="font-bold text-slate-100 text-sm truncate">
              Multi-Language Keyword Finder
            </span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <LanguageSwitcher />
            {userEmail ? (
              <>
                <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 max-w-[140px]">
                  <User className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{userEmail}</span>
                </div>
                <button
                  type="button"
                  onClick={onLogout}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 border border-slate-700 rounded-lg hover:border-slate-500 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" /> {t("logout")}
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setShowAuth(true)}
                className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium border border-slate-600 text-slate-200 rounded-lg hover:border-indigo-500 hover:text-indigo-300 transition-colors whitespace-nowrap"
              >
                {t("login")}
              </button>
            )}
          </div>
        </div>
      </nav>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  )
}
