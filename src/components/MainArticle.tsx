import React from "react";
import cn from "classnames";
import "./MainArticle.scss";

import StoryElement from "./StoryElement";

type MainArticleType = {
  className: string,
  title: string,
  author: string[],
  story: {}[],
};

const MainArticle = ({ className, title, author, story = [] }: MainArticleType) => (
  <div className="home-page-body">
    <div className={cn("story-teaser-component", "main-article-component", className)}>
      { title && <div className="title">{title}</div> }
      { author && <div className="author">{author.join(", ")}</div> }
      { story.map((storypart, index) =>(
        <StoryElement {...storypart} key={index.toString()} />
      ))}
    </div>
  </div>
);

export default MainArticle;
