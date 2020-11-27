import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import HeaderRow from "./HeaderRow";
import HomePageBody from "./HomePageBody";
import MainArticle from "./MainArticle";
import RecentStories from "./RecentStories";
import Slogan from "./Slogan";
import TableOfContents from "./TableOfContents";

import * as actions from "../reducers/Actions";
import { getStories } from "./Utility/Api.js";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  const [hashState, setHashState] = useState("");
  const newsStoryReducer = useSelector(state => state.newsStoryReducer);
  const settingsReducer = useSelector(state => state.settingsReducer);
  const newsTaglineReducer = useSelector(state => state.newsTaglineReducer);
  
  const clickEvent = ({target}) => {
    if(!settingsReducer.tableofcontents) {
      return null
    };
    while(target) {
      if (target.id === "TableOfContents" || target.id === "header-row") {break;}
      target = target.parentElement;
    }
    if(!target) return dispatch(actions.changeSettingBool("tableofcontents"));
  };

  useEffect(() => {
    const bodyClick = () => setHashState(window.location.hash.replace(/^\#/,""));
    window.onhashchange = () => bodyClick();
    let title = document.getElementsByTagName('title')[0];
    title.innerText = `News of the Day ${(new Date()).toLocaleDateString()}`;
    document.addEventListener('click', clickEvent);
    getStories(actions.setStoryTags, actions.setStoryAction, dispatch);
  }, []);

  let stories = [];
  if(!hashState) {
    stories = newsStoryReducer;
  } else if(parseInt(hashState)) {
    stories = newsStoryReducer.filter((str) => (str.id == hashState));
  } else if(hashState) {
    stories = newsStoryReducer.filter((str) => (str.section == hashState || str.subSection == hashState));
  }

  return (
    <div>
      <HeaderRow searchSection={settingsReducer.searchSection} />
      <TableOfContents open={settingsReducer.tableofcontents} />
      <div className={cn("app-body", {tableofcontents: settingsReducer.tableofcontents})}>
        <Slogan />
        { !hashState && <RecentStories {...newsTaglineReducer} /> }
        { stories.length > 1 && <HomePageBody stories={stories} />}

        { stories.length === 1 && <MainArticle {...stories[0]} />} 
      </div>
    </div>
  )
};

export default App;
