import React from 'react';
import "./HomePageBody.scss";

import StoryTeaser from './StoryTeaser';

type HomePageBodyType = {
  stories: {
    author: string[],
    date: string,
    header: string,
    id: string,
    section: string,
    subsection: string,
    subheader: string,
    title: string,
    story: {
      className: string,
      style: any,
      text: string,
    }[],
  }[]
};

const HomePageBody = ({stories}: HomePageBodyType) => {
  const arr1 = [], arr2 = [], arr3 = [];
  let arr1Sum = 0, arr2Sum = 0, arr3Sum = 0;
  stories.forEach((item, i) => {
    console.log(9, item);
    if(arr1Sum <= arr2Sum) {
      item.story.slice(0,3).forEach((tease) => {
        arr1Sum += (tease.text || "").length;
      });
      arr1.push(StoryTeaser(item, i));
    } else if(arr2Sum <= arr3Sum) {
      item.story.slice(0,3).forEach((tease) => {
        arr2Sum += (tease.text || "").length;
      });
      arr2.push(StoryTeaser(item, i));
    } else {
      item.story.slice(0,3).forEach((tease) => {
        arr3Sum += (tease.text || "").length;
      });
      arr3.push(StoryTeaser(item, i));
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
