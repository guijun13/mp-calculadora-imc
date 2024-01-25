import { LabelHTMLAttributes } from 'react';

function Label({
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { children: React.ReactNode }) {
  return <label {...props}>{children}</label>;
}

export default Label;
