import React from "react";
import cn from "classnames";

import "./Button.scss";
import type { ButtonType } from "./types";

const Button = ({ action, className, full, label, link, title, type }: ButtonType) => (
  <div
    className={cn("generic-button-component", className, type, full)}
    onClick={action}
    title={title}>
    {label}
  </div>
);

Button.defaultProps = {
  className: "",
  full: false,
  label: "",
  link: "",
  title: "",
  type: "primary",
};

export default Button;
