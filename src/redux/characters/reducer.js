import * as types from './types';

const initialState = {
  list: [],
  page: 1,
  isFetching: false,
  total: 0,
  item: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.CHARACTERS_UPDATE_LIST:
      return {
        ...state,
        list: action.list,
        total: action.total,
      };

    case types.CHARACTERS_SET_FETCHING:
      return {
        ...state,
        isFetching: action.value,
      };

    case types.CHARACTERS_UPDATE_PAGE:
      return {
        ...state,
        page: action.value,
      };

    case types.CHARACTERS_UPDATE_ITEM:
      return {
        ...state,
        item: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
