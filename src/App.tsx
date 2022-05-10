import { useEffect, useState } from 'react';

import { API_URL } from '@constants/api';
import { SideNavbar } from '@organisms/SideNavbar';
import { TopMenu } from '@organisms/TopMenu';
import { AppContainer, AppContent } from 'App.style';
import { useAppState } from 'contexts/AppContext/AppContext';
import AppRoutes from 'routes/AppRoutes';

const fetchData = async () => {
  console.log('useFetch', 'fetching data');
  try {
    const response = await fetch(API_URL);
    const json = await response.json();

    // Artificial delay to simulate fetching data
    setTimeout(() => {
      console.log('useFetch', 'fetching data success');
    }, 100);
  } catch (error) {
    // Artificial delay to simulate fetching data
    console.log('useFetch', 'fetching fail');
  }
};

const App = () => {
  // const { dispatch } = useAppState();
  // const [banner, setBanner] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContainer id="appContainer">
      <TopMenu banner={''} />
      <AppContent id="appContent">
        <SideNavbar />
        <AppRoutes />
      </AppContent>
    </AppContainer>
  );
};

export default App;
