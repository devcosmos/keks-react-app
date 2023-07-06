import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../consts';
import Main from '../../pages/main/main';
import Catalog from '../../pages/catalog/catalog';
import Favourites from '../../pages/favourites/favourites';
import NotFound from '../../pages/not-found/not-found';
import Product from '../../pages/product/product';
import SignIn from '../../pages/sign-in/sign-in';
import SignUp from '../../pages/sign-up/sign-up';
import { getAuthStatus } from '../../store/user-process/selectors';
import { useAppSelector } from '../../hooks';
import PrivateRoute from '../private-route/private-route';
import Loader from '../loader/loader';

function App(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const isAuth = authStatus === AuthStatus.Auth;

  if (authStatus === AuthStatus.Unknown) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Main />} />
      <Route path={AppRoute.Catalog} element={<Catalog />} />
      <Route path={AppRoute.Product} element={<Product />} />
      <Route
        path={AppRoute.Favourites}
        element={
          <PrivateRoute access={isAuth} redirect={AppRoute.SignIn}>
            <Favourites />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.SignIn}
        element={
          <PrivateRoute access={!isAuth} redirect={AppRoute.Main}>
            <SignIn />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.SignUp}
        element={
          <PrivateRoute access={!isAuth} redirect={AppRoute.Main}>
            <SignUp />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
