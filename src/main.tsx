import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

const rootNode = document.getElementById('react-app')!;

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
