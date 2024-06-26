import * as React from 'react';
import cn from '../../utils/cn';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-full px-8',

        'sm:max-w-[600px]',

        'md:max-w-[800px]',

        className,
      )}
    >
      {children}
    </div>
  );
}
