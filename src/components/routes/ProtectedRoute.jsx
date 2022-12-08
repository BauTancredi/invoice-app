import { Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default function ProtectedRoute({
  cookie,
  redirectPath = '/login',
  children
}) {
  if (!cookie.user) {
    return <Navigate to={redirectPath} replace />;
  }

  const { exp } = jwtDecode(cookie.user);
  if (exp * 1000 < Date.now()) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}
