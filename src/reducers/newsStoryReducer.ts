/* NEWS CONSTANTS */
const SET_STORY_ACTION = 'SET_STORY_ACTION';
export const SET_STORY_TAGS = 'SET_STORY_TAGS';

/* NEWS REDUCER */
const initial = [];

const newsStoryReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_STORY_ACTION:
      return action.value
    default:
      return state;
  }
}
    
export default newsStoryReducer

/* NEWS ACTIONS */

export const setStoryAction = (value: String) => ({type:SET_STORY_ACTION, value});
export const setStoryTags = (value: String) => ({type:SET_STORY_TAGS, value});
