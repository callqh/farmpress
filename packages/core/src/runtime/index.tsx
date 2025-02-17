import { MDXProvider } from '@mdx-js/react';
import { Suspense, createElement } from 'react';
import { matchRoutes, useLocation } from 'react-router';
// import path from 'path'
// import { cwd } from 'process'
// import { lazyWithPreload } from "react-lazy-with-preload";

export const routers = [
  {
    path: '/',
    // element: lazyWithPreload(() => import('../../docs/home.md')),
  },
  // {
  //   path: '/about',
  //   element: lazyWithPreload(() => import('../../docs/about.md')),
  // }
];

export default () => {
  const { pathname } = useLocation();
  const route = matchRoutes(routers, pathname);
  if (!route) {
    return <div>404</div>;
  }
  return (
    <div>
      <h1>hello world</h1>
      <MDXProvider>
        {/* <HomeMd /> */}
        {/* @ts-ignore */}
        {process.env.NODE_ENV === 'development' ? (
          <Suspense fallback={<div>Loading...</div>}>
            {/* @ts-ignore */}
            <div>{createElement(route[0].route.element)}</div>
          </Suspense>
        ) : (
          <div>
            {/* @ts-ignore */}
            {createElement(route[0].route.element)}
          </div>
        )}
      </MDXProvider>
    </div>
  );
};
