import React from "react";
import cn from "classnames";

import StoryElement from "./StoryElement";
import "./StoryTeaser.scss";
import type { StoryType } from "./types";


const StoryTeaser = ({story, className = "", author, title, id}: StoryType) => (
  <div className={cn("story-teaser-component", className)}>
    { title && <a href={`#${id}`} className="title">{title}</a> }
    { author && <div className="author">{author.join(", ")}</div> }
    { story[0] && <StoryElement {...story[0]} key="first"/> }
    { story[1] && <StoryElement {...story[1]} key="second"/> }
    { story[2] && <StoryElement {...story[2]} key="third"/> }
  </div>
);

export default StoryTeaser;
