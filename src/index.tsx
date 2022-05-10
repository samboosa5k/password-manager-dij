import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import AppStateProvider from 'contexts/AppContext/AppContext';

import App from './App';

import './theme/index.css';

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </BrowserRouter>
);
