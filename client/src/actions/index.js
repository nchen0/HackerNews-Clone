import axios from "axios";
export const FETCH_STORY_SUCCESS = "FETCH_STORY_SUCCESS";
export const FETCH_NEW_SUCCESS = "FETCH_NEW_SUCCESS";

export const fetchStories = () => {
  return dispatch => {
    return axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(({ data }) => {
        let ids = data.slice(0, 20);
        ids.map(id => {
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(({ data }) => {
            dispatch({ type: FETCH_STORY_SUCCESS, payload: data });
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const fetchNew = () => {
  return dispatch => {
    return axios
      .get("https://hacker-news.firebaseio.com/v0/newstories.json")
      .then(({ data }) => {
        let ids = data.slice(0, 20);
        ids.map(id => {
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(({ data }) => {
            dispatch({ type: FETCH_NEW_SUCCESS, payload: data });
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
