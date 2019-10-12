import * as types from './types';

export const setFetching = value => {
  return {
    type: types.CHARACTERS_SET_FETCHING,
    value,
  };
};

export const updateList = (list, total) => {
  return {
    type: types.CHARACTERS_UPDATE_LIST,
    list: list,
    total: total,
  };
};

export const updatePage = value => {
  return {
    type: types.CHARACTERS_UPDATE_PAGE,
    value,
  };
};

export const updateItem = value => {
  return {
    type: types.CHARACTERS_UPDATE_ITEM,
    value,
  };
};
