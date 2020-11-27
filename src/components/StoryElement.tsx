import React from "react"
import cn from "classnames"

import type { ParagraphType } from "./types";

const StoryElement = ({type, text, array, className=""}: ParagraphType) => {
  switch (type) {
    case "title":
      return <span className={cn("title-story-element", className)}>{text}</span>
    case "author":
      return <span className={cn("author-story-element", className)}>{text}</span>
    case "list":
      return (
        <ul className={cn("list-story-element", className)}>
          {array.map((story, index)=>(
            <li key={index.toString()} className="list-item-story-element">{story}</li>
          ))}
        </ul>
      );
    default:
      return <span className={cn("title-story-element", className)}>{text}</span>
  }
};

export default StoryElement;
