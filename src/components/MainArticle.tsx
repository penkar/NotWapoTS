import React from "react";
import cn from "classnames";

import StoryElement from "./StoryElement";
import "./MainArticle.scss";
import type { StoryType } from "./types";


const MainArticle = ({ className, title, author, story = [] }: StoryType) => (
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
