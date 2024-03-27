import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import AppShell from '../components/AppShell';
import PageNotFound from '../components/NotFound';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import PrivateRoute from '../components/PrivateRoute';

const RouterNoteApp = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<AppShell />}
      errorElement={<PageNotFound />}
    >
      <Route element={<PrivateRoute />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Route>,
  ),
);

export default RouterNoteApp;
