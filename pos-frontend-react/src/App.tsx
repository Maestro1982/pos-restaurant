import { ReactNode } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';

import { Home, Auth, Orders, Tables, Menu } from './pages';

import { RootState } from './redux/store';
import useLoadData from './hooks/useLoadData';

import Header from './components/shared/Header';
import FullScreenLoader from './components/shared/FullScreenLoader';

function Layout() {
  const location = useLocation();
  const isLoading = useLoadData();
  const hideHeaderRoutes = ['/auth'];
  const { isAuth } = useSelector((state: RootState) => state.user);

  if (isLoading) return <FullScreenLoader />;

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route path='/auth' element={isAuth ? <Navigate to='/' /> : <Auth />} />
        <Route
          path='/orders'
          element={
            <ProtectedRoutes>
              <Orders />
            </ProtectedRoutes>
          }
        />
        <Route
          path='/tables'
          element={
            <ProtectedRoutes>
              <Tables />
            </ProtectedRoutes>
          }
        />
        <Route
          path='/menu'
          element={
            <ProtectedRoutes>
              <Menu />
            </ProtectedRoutes>
          }
        />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

function ProtectedRoutes({ children }: { children: ReactNode }) {
  const { isAuth } = useSelector((state: RootState) => state.user);

  if (!isAuth) {
    return <Navigate to='/auth' />;
  }

  return children;
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
