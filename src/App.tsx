import { BrowserRouter } from 'react-router-dom';

import { FlexRow as AppContainer } from '@molecules/Container';
import { SideNavbar } from '@organisms/SideNavbar';

import AppStateProvider from 'contexts/AppContext/AppContext';
import AppRoutes from 'routes/AppRoutes';

const App = () => {
  return (
    <AppContainer id="appContainer" flex="1">
      <BrowserRouter>
        <AppStateProvider>
          <SideNavbar />
          <AppRoutes />
        </AppStateProvider>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
