import { createRoot } from 'react-dom/client';
import 'theme/index.css';

import App from '@components/App/App';
import AppStateProvider from './context';

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
  <AppStateProvider>
    <App />
  </AppStateProvider>
);
