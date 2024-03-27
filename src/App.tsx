import { RouterProvider } from 'react-router-dom';
import RouterNoteApp from './Router';

export default function App() {
  return (
    <RouterProvider router={RouterNoteApp} />
  );
}
