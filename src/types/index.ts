import { SupabaseClient } from '@supabase/supabase-js';

export interface SupabaseConfig {
  instanceUrl: string;
  apiKey: string;
  supabaseClient: SupabaseClient;
}