import {
  LOGIN_USER,
  REGISTER_USER,
  ADD_COMPANY,
  GET_MARKERS
} from '../_actions/types';

export default function (state = {}, action) {
  switch (action.type) {
      case LOGIN_USER:
          return { ...state, loginSuccess: action.payload }
          break;
          case REGISTER_USER:
            return { ...state, register: action.payload }
            break;
          case ADD_COMPANY:
            return { ...state, register: action.payload }
            break;
          case GET_MARKERS:
            return { ...state, markerSuccess: action.payload }
            break;

      default:
          return state;
  }



}