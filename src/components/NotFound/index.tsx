import { useRouteError, Link } from 'react-router-dom';
import ilustrationNotFound from '../../assets/404.svg';

type UseRouteError = {
  error: {
    message: string
  },
  status: number,
  statusText: string

};

export default function PageNotFound() {
  const routeError = useRouteError() as UseRouteError;
  const statusError = routeError.statusText;
  const messageError = routeError.error.message;

  return (
    <section className="min-h-screen bg-background p-8 flex flex-col justify-center items-center gap-4">
      <img
        src={ilustrationNotFound}
        alt="Ilustration 404 page not found"
        className="w-full h-full sm:h-60"
      />
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-3xl text text-neutral-700 font-bold tracking-wider animate-pulse">
          {statusError}
        </h2>
        <p className="text-center font-medium tracking-wide text-neutral-500 ">
          {messageError}
        </p>
        <p className="flex justify-center gap-1 items-center -mt-2 text-center font-medium tracking-wide text-neutral-700 ">
          Silahkan Kembali kehalaman
          {' '}
          <Link
            to="/"
            className="flex justify-center items-center  underline font-semibold min-h-[44px] min-w-[44px] underline-offset-4 decoration-wavy decoration-secondary text-sky-600"
          >
            {' '}
            Home
          </Link>
        </p>
      </div>
    </section>
  );
}
