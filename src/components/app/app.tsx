import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts';
import Main from '../../pages/main/main';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
