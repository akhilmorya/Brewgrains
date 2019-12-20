/**
 *  
 * Date:
 * Description: COMMON REDUCER FOR SPINNER AND MODAL!
 *
 */

export const START_SPINNER = 'START_SPINNER';
export const STOP_SPINNER = 'STOP_SPINNER';

const initialState = {
  isFetching: false,
};

// This reducer stores the state of common spinner and modal.
export default function (state = initialState, action) {
  switch (action.type) {
    case START_SPINNER:
      return {
        ...state,
        isFetching: true
      };
    case STOP_SPINNER:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}
