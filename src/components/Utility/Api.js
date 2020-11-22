import Sample from './Sample'

export const getStories = (setStoryTags, setStoryAction, dispatch) => {
  dispatch(setStoryTags(Sample));
  dispatch(setStoryAction(Sample));
  // fetch(``)
  //   .then(res=>res.json())
  //   .then(response=> {
  //     console.log(resonse);
  //   })
}
