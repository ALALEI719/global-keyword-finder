"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import type { User as SupabaseUser } from "@supabase/supabase-js"
import NavBar from "./NavBar"

export default function SiteNavBar() {
  const [user, setUser] = useState<SupabaseUser | null>(null)

  const supabaseConfigured = !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith("http") &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  useEffect(() => {
    if (!supabaseConfigured) return
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [supabaseConfigured])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  return <NavBar userEmail={user?.email ?? null} onLogout={handleLogout} />
}
