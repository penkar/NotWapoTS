import React from "react";
import cn from "classnames";
import { useDispatch } from "react-redux"

import * as actions from "../reducers/Actions"
import "./HeaderButton.scss";
import { HeaderButtonType } from "./types";

const HeaderButton = ({ value, className, children, title }: HeaderButtonType) => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(actions.changeSettingBool(value));
  return (
    <div onClick={onClick} className={cn("news-button", className)}>
      { title }
      { children }
    </div>
  );
}

HeaderButton.defaultProps = {
  className: "",
  value: null,
  onClick: () => null,
  childrenn: null,
  title: "",
};

export default HeaderButton;
