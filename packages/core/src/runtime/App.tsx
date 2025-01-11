import { matchRoutes } from 'react-router';
import { routers } from './index.js';

export const initPageData = async (pathname: string) => {
  const route = matchRoutes(routers, pathname);
  if (route) {
    const matchedRoute = route[0].route;
    // @ts-ignore
    const mod = await matchedRoute.element?.preload();
    return {
      mod,
    };
  }
};
