import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import Button from "./Button";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  className?: string;
}

function ButtonTab({
  children,
  isActive,
  className,
  ...buttonProps
}: PropsWithChildren<Props>) {
  return (
    <Button
      variant="tab"
      className={`
        ${className}
        ${
          isActive
            ? "font-semibold bg-deep_coral text-slate-800"
            : "text-slate-100 bg-transparent"
        }
      `}
      {...buttonProps}
    >
      {children}
    </Button>
  );
}

export default ButtonTab;
