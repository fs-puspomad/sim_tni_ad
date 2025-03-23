import {  DataProvider } from 'react-admin';
import { supabaseDataProvider } from 'ra-supabase';
import { supabaseConfig } from '../supabaseConfig';

export const dataProvider: DataProvider = supabaseDataProvider(supabaseConfig);