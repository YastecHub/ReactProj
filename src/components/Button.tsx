import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  colour?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, colour = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + colour} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
