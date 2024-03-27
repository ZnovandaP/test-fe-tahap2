import { CatogoryMenu } from '../../service/menu';
import { formatIDR } from './CardAcount';

type CardMenuProps = {
  menu: CatogoryMenu['menu'][0]
};

export default function CardMenu({ menu }: CardMenuProps) {
  return (
    <div className="flex items-center justify-evenly" key={menu.name}>
      <div className="w-[20%] min-w-[70px] min-h-[70px] max-w-[80px] max-h-[80px]">
        <img
          className=""
          src={menu.photo}
          alt={menu.name}
        />
      </div>
      <div className="flex justify-between flex-col gap-2 w-[60%] max-w-[600px]">
        <h3 className="font-bold line-clamp-1">
          {menu.name}
        </h3>
        <p className="line-clamp-3 text-sm opacity-75">
          {menu.description}
        </p>
      </div>
      <div className="w-[20%] flex justify-end text-sm sm:text-base font-medium pr-1">
        <h3>
          {formatIDR.format(menu.price)}
        </h3>
      </div>
    </div>
  );
}
