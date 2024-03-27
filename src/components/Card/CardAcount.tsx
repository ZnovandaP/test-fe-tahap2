type CardAcountProps = {
  qr: string
  balance: number
  point: number
  greeting: string
  user: string
  onClick: () => void
};

export const formatIDR = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
});
export default function CardAcount({
  balance, point, qr, greeting, user, onClick,
}: CardAcountProps) {
  return (
    <div className="bg-white p-6 rounded-md shadow-md shadow-neutral-500 sm:w-4/5">
      <div className="flex flex-col gap-3">
        <h2 className="font-medium">
          {`${greeting},`}
        </h2>
        <h2 className="font-bold tracking-wide">
          {user}
        </h2>
      </div>

      <div className="flex items-center gap-6 justify-between mt-6">
        <button
          onClick={onClick}
          type="button"
          className="w-[75px] h-[75px] rounded-full shadow-md shadow-neutral-400 overflow-hidden p-3"
        >
          <div>
            <img src={qr} alt="QR Code" className="sm:w-[50px] sm:h-[50px]" />
          </div>
        </button>

        <div className="flex flex-col gap-2 w-[70%] sm:w-[200px]">
          <div className="flex items-center justify-between flex-wrap">
            <p className="">
              Saldo
            </p>
            <p className="font-bold">
              {formatIDR.format(balance)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="">
              Points
            </p>
            <p className="font-bold text-teal-500">
              {point}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
