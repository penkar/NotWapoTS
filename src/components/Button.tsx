import React from "react";
import cn from "classnames";
import "./Button.scss";

type ButtonType = {
  action?: (event) => any,
  className: string,
  full?: boolean,
  label: string,
  link: string,
  title?: string,
  type: string,
}

const Button = ({ action, className, full, label, link, title, type }:ButtonType) => (
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
