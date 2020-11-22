import React from "react";
import cn from "classnames";

import Icon from "./Icon";
import SubContent from "./SubContent";

type ContentType = {
  className?: string,
  label: string,
  link: string,
  sublinks?: {
    label: string,
    key: string,
    link: string,
  }[],
}

const Content = ({ className, sublinks, link, label }: ContentType) => (
  <div className={cn("content-component", className)}>
    <span className="label">
      {label}
    </span>
    <span className="right-arrow">
      {Boolean(sublinks.length) && <Icon name="FaAngleRight" style={{fontSize: "1.5em"}}/>}
    </span>
    {Boolean(sublinks.length) && (
      <div className={cn("subcontents-component thin-shadow")}>
        { sublinks.map((sub) => <SubContent {...sub} />) }
      </div>
    )}
  </div>
);

export default Content;
