// file: supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://fzqdeztlpslhxwdicvnq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6cWRlenRscHNsaHh3ZGljdm5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5MzI3NTYsImV4cCI6MjA5NDUwODc1Nn0.3ZCCDPfawASAEU0gCZv8c3LnWNjvV9W-wulkny04CX4';

export const pamiloDb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
