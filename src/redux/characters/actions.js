import * as types from './types';
import * as api from '../../api';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';

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

export const initCharactersList = () => {
  return async (dispatch, getState) => {
    dispatch(updateList([], 0));
    dispatch(updatePage(1));
    dispatch(fetchCharactersList());
  };
};

export const updateCharactersListPage = () => {
  return async (dispatch, getState) => {
    const {page} = getState().characters;
    const newPage = page + 1;
    dispatch(updatePage(newPage));
    dispatch(fetchCharactersList());
  };
};

export const fetchCharactersList = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setFetching(true));
      const {page, list} = getState().characters;
      const params = {page};
      const getCharactersRes = await api.getCharacters(params);

      const newList = [...list, ..._.get(getCharactersRes, 'data.results', [])];
      const total = _.get(getCharactersRes, 'data.info.count', 0);

      dispatch(updateList(newList, total));
    } catch (err) {
      console.log('fetchCharactersList error: ', err.message);
    } finally {
      dispatch(setFetching(false));
    }
  };
};

export const addCharacter = data => {
  return (dispatch, getState) => {
    try {
      dispatch(setFetching(true));
      const charactersList = getState().characters.list;
      charactersList.push(data);
      Actions.pop();
    } catch (err) {
      console.log('addCharacter err: ', err.message);
    } finally {
      dispatch(setFetching(false));
    }
  };
};
