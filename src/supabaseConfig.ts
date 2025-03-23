import { createClient } from '@supabase/supabase-js';
import { SupabaseConfig } from './types';

const instanceUrl = import.meta.env.VITE_SUPABASE_URL as string;
const apiKey = import.meta.env.VITE_SUPABASE_API_KEY as string;

export const supabaseClient = createClient(instanceUrl, apiKey);
export const supabaseConfig: SupabaseConfig = { instanceUrl, apiKey, supabaseClient };