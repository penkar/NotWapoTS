import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import cn from "classnames"
import "./App.scss";

import HeaderRow from "./HeaderRow";
import HomePageBody from "./HomePageBody";
import MainArticle from "./MainArticle";
import RecentStories from "./RecentStories";
import Slogan from "./Slogan";
import TableOfContents from "./TableOfContents";

import * as actions from "../reducers/Actions"
import { getStories } from "./Utility/Api.js";

const App = () => {
  const dispatch = useDispatch();
  const [hashState, setHashState] = useState("");
  const newsStoryReducer = useSelector(state => state.newsStoryReducer);
  const settingsReducer = useSelector(state => state.settingsReducer);
  const newsTaglineReducer = useSelector(state => state.newsTaglineReducer);

  const changeSetting = () => dispatch(actions.changeSetting);
  const changeSettingBool = () => dispatch(actions.changeSettingBool);
  const setStoryAction = () => dispatch(actions.setStoryAction);
  const setStoryTags = () => dispatch(actions.setStoryTags);
  useEffect(() => {

//     let title = document.getElementsByTagName('title')[0];
//     title.innerText = `News of the Day ${(new Date()).toLocaleDateString()}`;
//     document.addEventListener('click', this._click);
//     getStories(this.props.actions);
//     window.onhashchange = this._body;


    getStories(actions.setStoryTags, actions.setStoryAction, dispatch);
  }, []);

  let stories = [];
  if(!hashState) {
    console.log(33);
    stories = newsStoryReducer;
  } else if(parseInt(hashState)) {
    console.log(34);
    stories = newsStoryReducer.filter((str) => (str.id == hashState));
  } else if(hashState) {
    console.log(35);
    stories = newsStoryReducer.filter((str) => (str.section == hashState || str.subSection == hashState));
  }

  const bodyClick = () => setHashState(window.location.hash.replace(/^\#/,""));

  const click = ({target}) => {
    if(!settingsReducer.tableofcontents) return null;
    while(target) {
      if (target.id === "TableOfContents" || target.id === "header-row") {break;}
      target = target.parentElement;
    }
    if(!target) return changeSettingBool("tableofcontents");
  };

  return (
    <div>
      <HeaderRow changeSettingBool={changeSettingBool} searchSection={settingsReducer.searchSection} />
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


// const mapActions = (dispatch) =>({
//   dispatch,
//   actions: {
//     changeSetting: bindActionCreators(actions.changeSetting, dispatch),
//     changeSettingBool: bindActionCreators(actions.changeSettingBool, dispatch),
//     setStoryAction: bindActionCreators(actions.setStoryAction, dispatch),
//     setStoryTags: bindActionCreators(actions.setStoryTags, dispatch),
//   },
// });

// class App extends React.Component {
//   state={
//     hash: window.location.hash.replace(/^\#/,'')
//   }

//   componentDidMount() {
//     let title = document.getElementsByTagName('title')[0];
//     title.innerText = `News of the Day ${(new Date()).toLocaleDateString()}`;
//     document.addEventListener('click', this._click);
//     getStories(this.props.actions);
//     window.onhashchange = this._body;
//   }

//   render() {
//     const {actions, settingsReducer, newsStoryReducer, newsTaglineReducer} = this.props;
//     const {hash} = this.state;
//     const stories = this._relevantStories();

//     return (
//       <div>
//         <HeaderRow changeSettingBool={actions.changeSettingBool} searchSection={settingsReducer.searchSection} />
//         { TableOfContents(settingsReducer.tableofcontents) }
//         <div className={cn('app-body', {tableofcontents:settingsReducer.tableofcontents})}>
//           <Slogan />
//           { !hash && RecentStories(newsTaglineReducer) }
//           { stories.length > 1 && HomePageBody(stories) }

//           { stories.length === 1 && MainArticle(stories[0]) }
//         </div>
//       </div>
//     )
//   }

//   _relevantStories = () => {
//     let {newsStoryReducer} = this.props, {hash} = this.state;
//     if(!hash) {
//       return newsStoryReducer;
//     } else if(parseInt(hash)) {
//       return newsStoryReducer.filter((str) => (str.id == hash));
//     } else if(hash) {
//       return newsStoryReducer.filter((str) => (str.section == hash || str.subSection == hash));
//     }
//     return [];
//   }

//   _body = () => this.setState({hash: window.location.hash.replace(/^\#/,'')});

//   _click = ({target}) => {
//     if(!this.props.settingsReducer.tableofcontents) return null;
//     while(target) {
//       if (target.id === 'TableOfContents' || target.id === 'header-row') {break;}
//       target = target.parentElement;
//     }
//     if(!target) return this.props.actions.changeSettingBool('tableofcontents');
//   }
// }

// export default connect(state => state, mapActions)(App)
