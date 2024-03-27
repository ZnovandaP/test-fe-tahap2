import * as React from 'react';

type ButtonLoginProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
};

export default function ButtonLogin({ children, ...props }: ButtonLoginProps) {
  return (
    <button
      {...props}
      type="submit"
      className="rounded-lg mt-4 px-4 py-2 ring-2 ring-neutral-400 font-bold text-lg w-36"
    >
      {children}
    </button>
  );
}
