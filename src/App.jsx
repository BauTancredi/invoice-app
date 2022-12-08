import { Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import LoginForm from './components/forms/LoginForm/LoginForm';
import SignUpForm from './components/forms/SignUpForm/SignUpForm';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/routes/ProtectedRoute';
import Error404 from './components/errors/Error404';

function App() {
  const [cookie, setCookie] = useCookies(['user']);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <ProtectedRoute cookie={cookie}>
              <p>Hola</p>
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={<LoginForm cookie={cookie} setCookie={setCookie} />}
        />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
