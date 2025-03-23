import { Resource } from 'react-admin';
import { ListGuesser, EditGuesser, CreateGuesser, ShowGuesser } from 'ra-supabase';

export const resources = [
  <Resource 
    key="sim" 
    name="sim" 
    list={ListGuesser} 
    edit={EditGuesser} 
    create={CreateGuesser} 
    show={ShowGuesser} 
  />
];