import React from "react";
import cn from "classnames";
import "./StoryTeaser.scss";

import StoryElement from "./StoryElement";

type StoryTeaserType = {
  author: string[],
  className?: string,
  id: string,
  title: string,
  story: {
    type: string,
    text: string,
    array: string[],
    className: string,
  }[],
}

const StoryTeaser = ({story, className = "", author, title, id,}: StoryTeaserType, i:number) => (
  <div className={cn("story-teaser-component", className)} key={i}>
    { title && <a href={`#${id}`} className="title">{title}</a> }
    { author && <div className="author">{author.join(", ")}</div> }
    { story[0] && <StoryElement {...story[0]} key="first"/> }
    { story[1] && <StoryElement {...story[1]} key="second"/> }
    { story[2] && <StoryElement {...story[2]} key="third"/> }
  </div>
);

export default StoryTeaser;
