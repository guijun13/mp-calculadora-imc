import { ButtonHTMLAttributes, ReactNode } from 'react';

function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button className="w-full bg-[#E85B81] text-center text-white py-2 my-2 rounded" {...props}>
      {children}
    </button>
  );
}

export default Button;
