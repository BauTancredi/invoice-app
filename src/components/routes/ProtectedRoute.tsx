import { Navigate } from "react-router-dom";
import jwtDecode, { JwtPayload } from "jwt-decode";

interface ProtectedRouteProps {
  cookie: {
    user: string;
  };
  redirectPath: string;
  children: React.ReactNode;
}

export default function ProtectedRoute({ cookie, redirectPath, children }: ProtectedRouteProps) {
  if (!cookie.user) {
    return <Navigate replace to={redirectPath} />;
  }

  const { exp } = jwtDecode<JwtPayload>(cookie.user);

  if (exp && exp * 1000 < Date.now()) {
    return <Navigate replace to={redirectPath} />;
  }

  return children;
}
