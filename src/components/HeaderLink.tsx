import React from "react";

import "./HeaderLink.scss";
type HeaderLinkType = {
  children?: any,
  key?: string,
  link?: string,
  title?: string,
}
const HeaderLink = ({ title="", children=null, link="" }: HeaderLinkType) => (
  <li className="news-link-li">
    <a href={link}>
      { title }
      { children }
    </a>
  </li>
);

export default HeaderLink;
