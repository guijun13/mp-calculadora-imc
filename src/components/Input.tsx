import { InputHTMLAttributes } from 'react';
import { cn } from '../lib/utils';

function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input
      className={cn(`border rounded-md border-solid border-[#E85B81] py-3 pl-6`, className)}
      {...props}
    />
  );
}

export default Input;
