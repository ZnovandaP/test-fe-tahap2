import Container from '../Container';

type ModalQRProps = {
  qr: string
  onCloseModal: () => void
};

export default function ModalQR({ onCloseModal, qr }: ModalQRProps) {
  return (
    <div className="fixed bg-white top-0 bottom-0 left-0 right-0 center z-10">
      <button
        type="button"
        className="absolute top-10 right-10 center text-3xl font-semibold"
        onClick={onCloseModal}
      >
        ✕
      </button>
      <Container className="center flex-col gap-6">
        <h2 className="font-medium text-center text-balance">
          Show the QR Code below to the cashier.
        </h2>

        <img
          src={qr}
          alt="qr code to the cashier"
          className="w-full h-full object-cover"
        />
      </Container>
    </div>
  );
}
