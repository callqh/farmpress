import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from './index.js';

const container = document.getElementById('root');

console.log(process.env.NODE_ENV, '当前环境');

if (process.env.NODE_ENV === 'development') {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
} else {
  // build下进行水合
  // 开发模式下继续走render
  hydrateRoot(
    container,
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
}
