import "../styles/button.scss";
import { ButtonHTMLAttributes } from "react";
import { Icon } from "./Icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon: string;
  selected: boolean;
}

export function Button({ title, color, selected, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      {...(selected && { className: "selected" })}
      {...rest}
    >
      <Icon name={title} color={selected ? "#FAE800" : "#FBFBFB"} />
      {title}
    </button>
  );
}
