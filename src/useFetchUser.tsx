import axios from "axios";
import { useReducer, useEffect } from "react";

export enum ACTIONS {
  MAKE_REQUEST = "make-request",
  GET_DATA = "get-data",
  LIKE = "like",
  DISLIKE = "dislike",
  ERROR = "error",
}

const BASE_URL = "https://randomuser.me/api/";

function reducer(state: any, action: any) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { ...state, loading: true, user: null };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, user: action.payload.user };
    case ACTIONS.LIKE:
      return { ...state, loading: false, user: null, like: state.like + 1 };
    case ACTIONS.DISLIKE:
      return { ...state, loading: false, user: null, dislike: state.dislike + 1 };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        user: null,
      };
    default:
      return state;
  }
}

export default function useFetchUser(params: Object) {
  const initState = {
    user: null,
    loading: true,
    error: false,
    like: 0,
    dislike: 0,
  };
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(BASE_URL, {
        params: { ...params, inc: "id,name,gender,dob,picture,nat" },
      })
      .then((res) => {
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: { user: res.data.results[0] },
        });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });
  }, [params, state.like, state.dislike]);

  return [state, dispatch];
}
