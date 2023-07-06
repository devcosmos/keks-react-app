import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../consts';

type PrivateRouteProps = {
  access: boolean;
  redirect: AppRoute;
  children: JSX.Element;
}

function PrivateRoute({access, redirect, children}: PrivateRouteProps): JSX.Element {
  return (
    access
      ? children
      : <Navigate to={redirect} />
  );
}

export default PrivateRoute;
