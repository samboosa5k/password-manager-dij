import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const PasswordOverviewPage = lazy(() => import('@pages/PasswordOverview'));
const AddPasswordPage = lazy(() => import('@pages/AddPasswordView'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<PasswordOverviewPage />} />
        <Route path="/add" element={<AddPasswordPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
