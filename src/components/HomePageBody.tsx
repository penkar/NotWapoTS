import React from 'react';

import StoryTeaser from './StoryTeaser';
import "./HomePageBody.scss";
import type { StoriesType } from "./types";


type HomePageBodyType = {
  stories: StoriesType
};

const HomePageBody = ({stories}: HomePageBodyType) => {
  const arr1 = [], arr2 = [], arr3 = [];
  let arr1Sum = 0, arr2Sum = 0, arr3Sum = 0;
  stories.forEach((item, i) => {
    if(arr1Sum <= arr2Sum) {
      item.story.slice(0,3).forEach((tease) => {
        arr1Sum += (tease.text || "").length;
      });
      arr1.push(<StoryTeaser {...item} />);
    } else if(arr2Sum <= arr3Sum) {
      item.story.slice(0,3).forEach((tease) => {
        arr2Sum += (tease.text || "").length;
      });
      arr2.push(<StoryTeaser {...item} />);
    } else {
      item.story.slice(0,3).forEach((tease) => {
        arr3Sum += (tease.text || "").length;
      });
      arr3.push(<StoryTeaser {...item} />);
    }
  });

  const BODY_CLASS = 'home-page-body';
  const COL_CLASS = 'home-page-body-col';

  return (
    <div className={BODY_CLASS}>
      <div className={COL_CLASS}>
        {arr1}
      </div>
      <div className={COL_CLASS}>
        {arr2}
      </div>
      <div className={COL_CLASS}>
        {arr3}
      </div>
    </div>
  );
}

export default HomePageBody
