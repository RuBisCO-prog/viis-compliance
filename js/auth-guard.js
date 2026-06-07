const SUPABASE_URL  = 'https://qftzakhljmkxlinznjtp.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmdHpha2hsam1reGxpbnpuanRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3NDc2NDQsImV4cCI6MjA5NjMyMzY0NH0.WSz9Ao9HF-1Sv1webc9PpUkSvoW5YtCsD7gyvozYPl8';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON);

async function requireAuth() {
  const { data: { session } } = await db.auth.getSession();
  if (!session) {
    window.location.href = '/viis-compliance/index.html';
    return null;
  }
  return session;
}
