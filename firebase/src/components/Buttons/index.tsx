import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children: ReactNode;
  loading?: boolean;
  readOnly?: boolean;
};

export function Button({ children, className, loading, readOnly, ...props }: Props) {
  className = `rounded px-4 py-2 font-bold bg-skin-button hover:bg-skin-button-hover relative ${className}`;
  if (readOnly || loading) {
    className = `rounded px-4 py-2 font-bold bg-gray-400 text-gray-500 relative ${className}`;
  }

  return (
    <button className={className} disabled={readOnly || loading} {...props}>
      {children}
    </button>
  );
}
