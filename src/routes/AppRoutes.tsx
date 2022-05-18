import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dummy from 'components/Pages/Dummy';

// const PasswordOverviewPage = lazy(() => import('../pages/PasswordOverview'));
// const AddPasswordPage = lazy(() => import('../pages/AddPasswordView'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Dummy />} />
        {/*<Route path="/" element={<PasswordOverviewPage />} />*/}
        {/*<Route path="/add" element={<AddPasswordPage />} />*/}
        <Route path="*" element={<Dummy />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
