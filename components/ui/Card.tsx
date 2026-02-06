import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({ children, className = "", ...rest }: CardProps) {
  return (
    <div className={`card p-6 ${className}`} {...rest}>
      {children}
    </div>
  );
}
