import { useLocation } from 'react-router-dom';
import Container from '../Container';
import cn from '../../utils/cn';
import { MenuResponse } from '../../service/menu';

type MenuBarProps = {
  dataMenus: MenuResponse | null;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
};

export default function MenuBar({ isOpen, setIsOpen, dataMenus }: MenuBarProps) {
  const location = useLocation();

  return (
    <div className="h-[72px] z-10 bg-white flex items-center md:items-start md:h-28 fixed top-0 shadow-md shadow-neutral-300 w-full">
      <Container className="flex w-full justify-between items-center h-full md:flex-col md:items-start ">
        <h2 className="font-bold text-xl md:text-center md:w-full md:mt-6">
          MENU
        </h2>

        <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-3xl md:hidden font-bold">
          {isOpen ? '✕' : '☰'}
        </button>

        <nav className="w-full hidden md:block">
          <ul className="flex items-center justify-evenly w-full gap-6">
            {dataMenus !== null && dataMenus.result.categories.map((category) => {
              const to = `#${category.category_name.toLowerCase().split(' ').join('-')}`;

              return (
                <a
                  key={category.category_name}
                  href={to}
                  className={cn(
                    'h-12 center',
                    location.hash === to && 'border-b-4 border-b-teal-600',
                  )}
                >
                  {category.category_name}
                </a>
              );
            })}
          </ul>
        </nav>

      </Container>

      {isOpen && (
      <div className="bg-white absolute top-24 right-8  rounded-md w-52 p-6 shadow-md shadow-neutral-500 md:hidden">
        <nav>
          <ul className="flex gap-1 flex-col">
            {dataMenus !== null && dataMenus.result.categories.map((category) => {
              const to = `#${category.category_name.toLowerCase().split(' ').join('-')}`;

              return (
                <a
                  key={category.category_name}
                  href={to}
                  className={cn(
                    'h-8 block',
                    location.hash === to && 'border-b-4 border-b-teal-600',
                  )}
                >
                  {category.category_name}
                </a>
              );
            })}
          </ul>
        </nav>
      </div>
      )}

    </div>
  );
}
