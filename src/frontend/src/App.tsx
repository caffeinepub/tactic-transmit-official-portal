import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import LandingPage from './pages/LandingPage';
import ProductDeepDivePage from './pages/ProductDeepDivePage';
import BoardPage from './pages/BoardPage';
import ConnectSupportPage from './pages/ConnectSupportPage';
import LegalTechnicalDocsPage from './pages/LegalTechnicalDocsPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import RequireAuth from './components/routing/RequireAuth';
import RequireAdmin from './components/routing/RequireAdmin';
import DeepTechLayout from './components/layout/DeepTechLayout';

const rootRoute = createRootRoute({
  component: () => (
    <DeepTechLayout>
      <Outlet />
    </DeepTechLayout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LandingPage,
});

const productRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/product',
  component: ProductDeepDivePage,
});

const boardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/board',
  component: BoardPage,
});

const connectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/connect',
  component: ConnectSupportPage,
});

const legalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/legal',
  component: LegalTechnicalDocsPage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: () => (
    <RequireAuth>
      <RequireAdmin>
        <AdminDashboardPage />
      </RequireAdmin>
    </RequireAuth>
  ),
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/terms',
  component: TermsOfServicePage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy',
  component: PrivacyPolicyPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  productRoute,
  boardRoute,
  connectRoute,
  legalRoute,
  adminRoute,
  termsRoute,
  privacyRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
