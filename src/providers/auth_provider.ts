import { AuthProvider } from 'react-admin';
import { supabaseAuthProvider } from 'ra-supabase';
import { supabaseClient } from '../supabaseConfig';

export const authProvider: AuthProvider = supabaseAuthProvider(supabaseClient, {});