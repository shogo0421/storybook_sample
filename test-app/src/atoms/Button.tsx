import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  background?: string;
  onClick?: () => void;
}

export function Button(props: ButtonProps): JSX.Element {
  const { children, background, onClick } = props;
  return (
    <button
      style={{
        height: "60px",
        width: "auto",
        background,
        color: "white",
        padding: "8px 16px",
        border: "none",
        borderRadius: "4px",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
