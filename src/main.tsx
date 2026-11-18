import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootEl = document.getElementById('root')!;
const tree = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (rootEl.firstElementChild !== null) {
  hydrateRoot(rootEl, tree);
} else {
  createRoot(rootEl).render(tree);
}
