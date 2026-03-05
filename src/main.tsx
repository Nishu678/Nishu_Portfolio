import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import '@tanstack/react-router-devtools';

// Import styles
import './styles/index.css';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create router instance with a unique ID to prevent HMR issues
// Using an IIFE to ensure singleton pattern
const router = (() => {
  // @ts-ignore - accessing window property for router singleton
  if (typeof window !== 'undefined' && (window as any).__TANSSTACK_ROUTER__) {
    // @ts-ignore
    return (window as any).__TANSSTACK_ROUTER__;
  }

  const routerInstance = createRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
  });

  // @ts-ignore - store router instance globally for HMR
  if (typeof window !== 'undefined') {
    // @ts-ignore
    (window as any).__TANSSTACK_ROUTER__ = routerInstance;
  }

  return routerInstance;
})();

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
