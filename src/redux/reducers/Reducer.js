import { ADD_TAG, REMOVE_TAG, CLEARALL_TAGS } from "../actions/Action";

const initialState = {
  tags: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TAG:
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    case REMOVE_TAG: // Removed the space before 'REMOVE_TAG'
      return {
        ...state,
        tags: state.tags.filter((tag, index) => index !== action.payload)
      };
    case CLEARALL_TAGS:
      return {
        ...state,
        tags: [],
      };
    default:
      return state;
  }
};

export default Reducer;
