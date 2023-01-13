import { Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import jwtDecode from "jwt-decode";

import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Error404 from "./components/errors/Error404";

function App() {
  const [cookie, setCookie] = useCookies(["user"]);
  const token = cookie.user;
  
  const decoded = jwtDecode(token);
  
  const currentUser = decoded.user

  console.log(decoded.user);


  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          element={
            <ProtectedRoute cookie={cookie} redirectPath="/login">
              <p>Hola, {currentUser.name}</p>
            </ProtectedRoute>
          }
          path="/"
        />
        <Route element={<LoginForm cookie={cookie} setCookie={setCookie} />} path="/login" />
        <Route element={<SignUpForm cookie={cookie} setCookie={setCookie} />} path="/signup" />
        <Route element={<Error404 />} path="*" />
      </Route>
    </Routes>
  );
}

export default App;
