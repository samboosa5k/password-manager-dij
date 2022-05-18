import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Flex as AppContainer,
  Flex as ContentContainer
} from '@components/Container';
import { SideNavbar } from '@components/SideNavbar';
import AppRoutes from '../../routes/AppRoutes';


const App = () => {
  useEffect(() => {
    document.title = 'React App';
  }, []);
  return (
    <BrowserRouter>
      <AppContainer
        id="appContainer"
        position="relative"
        flex="1"
        flexDirection={'row'}
        backgroundColor={'#1c1c1c'}
        padding="0">
        <SideNavbar />
        <ContentContainer
          id="contentContainer"
          flex="1"
          flexDirection={'column'}
          height={'100%'}
          backgroundColor={'#5c5c5c'}>
          <AppRoutes />
        </ContentContainer>
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;
