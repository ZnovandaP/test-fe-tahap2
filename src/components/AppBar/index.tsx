// import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../Container';
import homeActive from '../../assets/home1.png';
import home from '../../assets/home2.png';
import menuActive from '../../assets/menu1.png';
import menu from '../../assets/menu2.png';
import ButtonMenuApp from '../Buttons/ButtonMenuApp';

export default function AppBar() {
  const { pathname } = useLocation();

  const arrayOfPathname = pathname.split('/');
  const currentPathname = `/${arrayOfPathname[1]}`;

  if (currentPathname === '/login') {
    return null;
  }
  return (
    <div className="fixed z-10 bg-white bottom-0 h-[72px] w-full center shadow-top">
      <Container className="center gap-32 md:gap-40 lg:gap-52">
        <ButtonMenuApp icon={home} label="Home" iconActive={homeActive} to="/" />
        <ButtonMenuApp icon={menu} label="Menu" iconActive={menuActive} to="/menu" />
      </Container>
    </div>
  );
}
