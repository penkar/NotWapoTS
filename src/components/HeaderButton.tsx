import React from "react";
import cn from "classnames";
import "./HeaderButton.scss";

type HeaderButtonType = {
  children: any,
  className: string,
  value: string,
  link: string,
  onClick: (string)=>any,
  title: string,
}

const HeaderButton = ({ value, className, onClick, children, title }: HeaderButtonType) => (
  <div onClick={() => onClick(value)} className={cn("news-button", className)}>
    { title }
    { children }
  </div>
);

HeaderButton.defaultProps = {
  className: "",
  value: null,
  onClick: () => null,
  childrenn: null,
  title: "",
};

export default HeaderButton;
