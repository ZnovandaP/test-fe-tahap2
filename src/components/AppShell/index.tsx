import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar';

export default function AppShell() {
  return (
    <>
      <main className="text-neutral-700">
        <Outlet />
      </main>

      <AppBar />
    </>
  );
}
