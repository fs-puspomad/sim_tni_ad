import { CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom';
import { ForgotPasswordPage, SetPasswordPage } from 'ra-supabase';

export const appCustomRoutes = (
  <CustomRoutes noLayout>
    <Route path={SetPasswordPage.path} element={<SetPasswordPage />} />
    <Route path={ForgotPasswordPage.path} element={<ForgotPasswordPage />} />
  </CustomRoutes>
);