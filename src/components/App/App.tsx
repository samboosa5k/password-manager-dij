import { BrowserRouter } from 'react-router-dom';

import { Flex as AppContainer } from '@components/Container';
import { SideNavbar } from '@components/SideNavbar';
import AppRoutes from '../../routes/AppRoutes';



const App = () => {
  return (
    <AppContainer id="appContainer" flex="1">
      <BrowserRouter>
          <SideNavbar />
          <AppRoutes />
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
