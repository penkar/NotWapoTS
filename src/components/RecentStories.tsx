import React from "react";

import "./RecentStories.scss";
type RecentStoriesType = {
  recentStories: {
    title: string,
    href: string,
  }[]
};

const RecentStories = ({recentStories=[]}: RecentStoriesType) => (
  <ul className="recent-sectional">
    <li className="label" key="title">In the News&nbsp;</li>
    {recentStories.map((story, index) => (
      <li className="recent-sectional-title" key={index}>
        <a href={`#${story.href || ""}`}>{story.title}</a>
      </li>
    ))}
  </ul>
);

export default RecentStories;
