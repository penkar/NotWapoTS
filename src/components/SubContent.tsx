import React from "react";

type SubContentType = {
  label: string,
  link: string,
}

const SubContent = ({ label, link }: SubContentType) => (
  <div className="subcontent-component">
    <a href={link}>{label}</a>
  </div>
);

export default SubContent;
