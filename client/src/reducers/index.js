import { FETCH_STORY_SUCCESS, FETCH_NEW_SUCCESS } from "../actions";

const initialState = {
  stories: [],
  new: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORY_SUCCESS:
      let stories = state.stories.slice();
      stories.push(action.payload);
      return Object.assign({}, state, { stories: stories });
    case FETCH_NEW_SUCCESS:
      let newStories = state.new.slice();
      newStories.push(action.payload);
      return Object.assign({}, state, { new: newStories });
  }
  return state;
};
