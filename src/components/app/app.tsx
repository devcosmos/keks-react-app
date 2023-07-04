import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts';
import Main from '../../pages/main/main';
import Catalog from '../../pages/catalog/catalog';
import Favourites from '../../pages/favourites/favourites';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Signup from '../../pages/signup/signup';
import Product from '../../pages/product/product';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.Catalog} element={<Catalog />} />
        <Route path={AppRoute.Product} element={<Product />} />
        <Route path={AppRoute.Favourites} element={<Favourites />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Signup} element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
