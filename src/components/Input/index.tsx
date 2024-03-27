import * as React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  id: string
  type: React.InputHTMLAttributes<HTMLInputElement>['type']
};

export default function Input({
  label, id, type, ...props
}: InputProps) {
  return (
    <label htmlFor={id} className="center flex-col gap-4">
      <span className="font-medium text-lg">
        {label}
      </span>
      <input
        {...props}
        type={type}
        id={id}
        name={id}
        className="rounded-lg p-3 shadow-sm shadow-neutral-500 outline-none w-60"
      />
    </label>
  );
}
