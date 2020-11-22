import React from "react";
import {FaBars, FaBell, FaSearch, FaAngleRight} from "react-icons/fa";

type IconType = {
  name: string,
  className?: string,
  style?: {fontSize: string}
};

const Icon = ({name="", className=""}: IconType) => {
  switch(name) {
    case "FaBars":
      return <FaBars className={className} />
    case "FaBell":
      return <FaBell className={className} />
    case "FaSearch":
      return <FaSearch className={className} />
    case "FaAngleRight":
    default:
      return <FaAngleRight className={className} />
  }
};

export default Icon;
