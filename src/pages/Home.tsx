import * as React from 'react';
import { createPortal } from 'react-dom';

import AutoCarousels from '../components/Carousels/AutoCarousels';
import Container from '../components/Container';
import motif from '../assets/motif.png';
import qr from '../assets/qr.jpg';
import LogoBar from '../components/AppBar/LogoBar';
import CardAcount from '../components/Card/CardAcount';
import ModalQR from '../components/Modal/ModalQR';
import homeApi, { HomeResponse } from '../service/home';

export default function Home() {
  const [data, setData] = React.useState<null | HomeResponse>(null);
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    homeApi().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      <LogoBar />
      <div className="mt-[72px]">
        <div className="relative h-80 center">
          <Container className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full sm:center">
            <CardAcount
              qr={data?.result.qrcode || qr}
              balance={data?.result.saldo || 0}
              point={data?.result.point || 0}
              greeting={data?.result.greeting || 'Hello world'}
              user={data?.result.name || 'User'}
              onClick={() => setShowModal(true)}
            />
          </Container>
          <img
            src={motif}
            alt=""
            className="w-full h-full absolute -z-[2] object-cover object-center"
          />
        </div>
        <AutoCarousels banners={data?.result.banner || []} />
        {createPortal(
          showModal && (
          <ModalQR
            onCloseModal={() => setShowModal(false)}
            qr={data?.result.qrcode || qr}
          />
          ),
          document.body,
        )}
      </div>
    </>
  );
}
