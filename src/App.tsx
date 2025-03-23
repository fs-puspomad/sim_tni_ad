import React from 'react';
import { Admin } from 'react-admin';
import { BrowserRouter } from 'react-router-dom';
import { LoginPage } from 'ra-supabase';
import { resources } from './resources';
import { appCustomRoutes } from './routes/customRoutes';
import { dataProvider } from './providers/data_provider';
import { authProvider } from './providers/auth_provider';
import { i18nProvider } from './providers/i18n_provider';

export const App: React.FC = () => (
  <BrowserRouter>
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      loginPage={LoginPage}
    >
      {resources}
      {appCustomRoutes}
    </Admin>
  </BrowserRouter>
);