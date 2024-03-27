import Container from '../Container';
import logo from '../../assets/logo_technopartner.png';

export default function LogoBar() {
  return (
    <div className="h-[72px] z-10 bg-white fixed top-0 shadow-md shadow-neutral-300 w-full">
      <Container className="flex items-center">
        <img
          className="min-w-28 h-14"
          src={logo}
          alt="Logo Technopartner"
        />

      </Container>
    </div>
  );
}
