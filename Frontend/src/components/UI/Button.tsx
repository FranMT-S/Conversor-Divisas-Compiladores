import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "filled" | "outline" | "text" | "tab";
}

const variantStyle = {
  filled: "bg-deep_coral",
  outline: "border border-deep_coral",
  text: "text-deep_coral",
  tab: "border-b border-gray-300 rounded-none rounded-t-md whitespace-nowrap",
};

function Button({
  children,
  className,
  variant,
  ...buttonProps
}: PropsWithChildren<Props>) {
  return (
    <button
      className={`
      inline-flex
      items-center
      text-center
      text-xs
      p-2
      sm:px-4
      focus:outline-none
      hover:border-deep_coral
      rounded
      ${variantStyle[variant ?? "filled"]}
      ${className}
    `}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

export default Button;
