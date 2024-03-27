import { Link, useLocation } from 'react-router-dom';
import cn from '../../utils/cn';

type ButtonMenuAppProps = {
  iconActive: string;
  icon: string;
  to: string
  label: string
};

export default function ButtonMenuApp({
  icon, iconActive, to, label,
}: ButtonMenuAppProps) {
  const { pathname } = useLocation();

  const arrayOfPathname = pathname.split('/');
  const currentPathname = `/${arrayOfPathname[1]}`;
  return (
    <Link to={to} className="w-8 h-8 flex-col center">
      {
        currentPathname === to ? (
          <img src={iconActive} alt="icon home" />

        ) : (
          <img src={icon} alt="icon home" />
        )
          }
      <span className={cn(
        'font-medium text-sm',
        currentPathname !== to && 'opacity-50',
      )}
      >
        {label}
      </span>
    </Link>
  );
}
