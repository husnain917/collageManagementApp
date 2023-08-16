import {
  ADD_DETAILS,
  SHOW_DETAILS,
  DELETE_DETAILS,
  UPDATE_DETAILS,
} from "../types/ActionsTypes";

// initial state
const initialState = {
  isAllDetails: [],
};

export default function Reducers(state = initialState, action) {
  switch (action?.type) {
    // add details
    case ADD_DETAILS:
      let addData = [...state?.isAllDetails, action?.payload];
      return {
        ...state,
        isAllDetails: addData,
      };

    // show details
    case SHOW_DETAILS:
      return {
        ...state,
        isAllDetails: action?.payload,
      };

    // delete details
    case DELETE_DETAILS:
      let delData = state?.isAllDetails?.filter(
        (item) => item?._id !== action?.payload
      );
      return {
        ...state,
        isAllDetails: delData,
      };

    // update details
    case UPDATE_DETAILS:
      let updateData = state?.isAllDetails?.map((item) => {
        if (item?._id === action?.payload?._id) {
          return action?.payload;
        } else {
          return item;
        }
      });
      return {
        ...state,
        isAllDetails: updateData,
      };

    default:
      return state;
  }
}
