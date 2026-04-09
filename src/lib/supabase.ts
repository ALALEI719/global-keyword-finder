import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// ── Credits helpers ──────────────────────────────────────────────────────────

export async function getUserCredits(userId: string): Promise<number> {
  const { data } = await supabase
    .from("users")
    .select("credits")
    .eq("id", userId)
    .single()
  return data?.credits ?? 0
}

export async function deductCredit(userId: string): Promise<boolean> {
  const credits = await getUserCredits(userId)
  if (credits <= 0) return false
  await supabase
    .from("users")
    .update({ credits: credits - 1 })
    .eq("id", userId)
  return true
}

export async function getUserApiKey(userId: string): Promise<string> {
  const { data } = await supabase
    .from("users")
    .select("api_key")
    .eq("id", userId)
    .single()
  return data?.api_key ?? ""
}

export async function saveUserApiKey(userId: string, key: string) {
  await supabase.from("users").update({ api_key: key }).eq("id", userId)
}

// Ensure a row exists in public.users after signup
export async function ensureUserRow(userId: string, email: string) {
  const { data } = await supabase
    .from("users")
    .select("id")
    .eq("id", userId)
    .single()
  if (!data) {
    await supabase.from("users").insert({ id: userId, email, credits: 5, api_key: "" })
  }
}
