import React from "react";
import cn from "classnames";

type MultiContentType = {
  className: string,
  primary: {
    label: string,
    key: string,
    link: string,
  },
  secondary?: {
    label: string,
    key: string,
    link: string,
  }[],
}

const MultiContent = ({primary, secondary, className}: MultiContentType) => (
  <div className={cn("multicontent-component content-component", className)}>
    <a className={"primary"} href={primary.link}>
      { primary.label }
    </a>
    {secondary.map(item=>
      <a className={"secondary"} href={item.link} key={item.key}>{item.label}</a>)}
  </div>
);

MultiContent.defaultProps = {
  primary: {
    label: "",
    key: "",
    link: "",
  },
  secondary: [],
  className: "",
}

export default MultiContent;
