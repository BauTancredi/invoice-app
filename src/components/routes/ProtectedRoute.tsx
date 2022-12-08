import { Navigate } from 'react-router-dom';
import jwtDecode, { JwtPayload } from 'jwt-decode';

interface ProtectedRouteProps {
  cookie: {
    user: string;
  };
  redirectPath: string;
  children: React.ReactNode;
}

export default function ProtectedRoute({
  cookie,
  redirectPath,
  children
}: ProtectedRouteProps) {
  if (!cookie.user) {
    return <Navigate to={redirectPath} replace />;
  }

  const { exp } = jwtDecode<JwtPayload>(cookie.user);
  if (exp && exp * 1000 < Date.now()) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}
