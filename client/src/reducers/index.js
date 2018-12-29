import { FETCH_STORY_SUCCESS } from "../actions";

const initialState = {
  stories: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORY_SUCCESS:
      let stories = state.stories.slice();
      stories.push(action.payload);
      return Object.assign({}, state, { stories: stories });
  }
  return state;
};
