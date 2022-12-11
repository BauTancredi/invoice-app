import { Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";

import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Error404 from "./components/errors/Error404";

function App() {
  const [cookie, setCookie] = useCookies(["user"]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          element={
            <ProtectedRoute cookie={cookie} redirectPath="/login">
              <p>Hola</p>
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
