import {SET_STORY_TAGS} from './newsStoryReducer'

const initial = []

const newsTaglineReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_STORY_TAGS:
      return action.value.map((str) => ({title:str.title, href:str.id}))
    default:
      return state;
  }
}

export default newsTaglineReducer
