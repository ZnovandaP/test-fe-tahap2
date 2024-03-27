import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const isAuth = typeof localStorage.getItem('token') === 'string';
  return isAuth ? (<Outlet />) : (<Navigate to="/login" />);
}
