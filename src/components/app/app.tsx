import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts';
import Main from '../../pages/main/main';
import Catalog from '../../pages/catalog/catalog';
import Favourites from '../../pages/favourites/favourites';
import NotFound from '../../pages/not-found/not-found';
import Product from '../../pages/product/product';
import SignIn from '../../pages/sign-in/sign-in';
import SignUp from '../../pages/sign-up/sign-up';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Main />} />
      <Route path={AppRoute.Catalog} element={<Catalog />} />
      <Route path={AppRoute.Product} element={<Product />} />
      <Route path={AppRoute.Favourites} element={<Favourites />} />
      <Route path={AppRoute.SignIn} element={<SignIn />} />
      <Route path={AppRoute.SignUp} element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
