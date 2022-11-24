import { createTheme, ThemeProvider, Toolbar } from '@mui/material';
import { useEffect } from 'react';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';

import theme from './theme';

import NavigationBar from './components/navigation/NavigationBar';
import Favorites from './pages/favorites';
import Menu from './pages/menu';
import Error from './pages/error';
import RestaurantInfo from './pages/restaurantInfo';

function App() {
  useEffect(() => {
    document.title = 'Nokia Luncher';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* <NavigationBar /> */}
      <Toolbar />
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/info' element={<RestaurantInfo />} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
