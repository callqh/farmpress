import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

import { initPageData } from './App.js';
import App from './index.js';

export default async function render(url: string) {
  console.log(url, 'url');
  const pageData = await initPageData(url);
  console.log(pageData, 'pageData');
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
  );
}
