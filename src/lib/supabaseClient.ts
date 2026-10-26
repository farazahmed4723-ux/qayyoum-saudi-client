import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://jfopczwvojfapensfwmb.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmb3Bjend2b2pmYXBlbnNmd21iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI5NzkzNDgsImV4cCI6MjEwODU1NTM0OH0.JCljmfgx27lhQkRuAnvklTv9UMkNWm0LyWUNUDOAaIA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
