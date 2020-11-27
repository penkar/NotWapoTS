import React from "react";

import Icon from "./Icon";
import HeaderButton from "./HeaderButton";
import HeaderLink from "./HeaderLink";
import "./HeaderRow.scss";

type HeaderRowType = {
  searchSection: boolean,
};

const Links = [{
  title:"Politics",
  link: "#politics",
},{
  title:"Opinions",
  link: "#opinions",
},{
  title:"Sports",
  link: "#sports",
},{
  title:"Local",
  link: "#local",
},{
  title:"National",
  link: "#national",
},{
  title:"World",
  link: "#world",
},{
  title:"Business",
  link: "#business",
},{
  title:"Tech",
  link: "#tech",
},{
  title:"Lifestyle",
  link: "#lifestyle",
}];

const HeaderRow  = ({searchSection=false}: HeaderRowType) => {
  return (
    <div id="header-row">
      <ul className="news-link-ul">

        <HeaderButton
          link=""
          className={searchSection ? "search" : ""}
          value="searchSection"
        >
          <Icon name="FaSearch" className="standard-icon" />
        </HeaderButton>

        <HeaderButton link="" value="tableofcontents">
          <span>Sections&nbsp;</span>
          <Icon name="FaBars" className="standard-icon" />
        </HeaderButton>
        { Links.map(link => <HeaderLink {...link} key={link.title} />) }
      </ul>

      <ul className="news-link-ul">
        <HeaderLink>
          <Icon name="FaBell" className="standard-icon"/>
        </HeaderLink>
      </ul>
    </div>
  );
}
export default HeaderRow;
