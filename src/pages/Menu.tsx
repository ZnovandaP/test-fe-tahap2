import * as React from 'react';
import MenuBar from '../components/AppBar/MenuBar';
import Container from '../components/Container';
import menuApi, { MenuResponse } from '../service/menu';
import CardMenu from '../components/Card/CardMenu';

export default function Menu() {
  const [data, setData] = React.useState<null | MenuResponse>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    menuApi().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      <MenuBar
        dataMenus={data}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <Container className="my-28 md:mb-28 md:mt-36 p-0">
        {data !== null && data.result.categories.map((category) => (
          <div className="flex flex-col gap-6" key={category.category_name}>
            <h2
              id={category.category_name.toLowerCase().split(' ').join('-')}
              className="font-bold text-lg py-4 bg-neutral-200 pl-8 rounded-md elm-id"
            >
              {category.category_name}
            </h2>

            <div className="grid grid-cols-1 gap-6 mb-8">
              {category.menu.map((menu) => (
                <CardMenu menu={menu} key={menu.name} />
              ))}
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
