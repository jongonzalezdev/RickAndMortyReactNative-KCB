import axios from 'axios';
import {BASE_URL} from '../config/api';
import qs from 'qs';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-type': 'application/json'},
});

// CHARACTERS
export const getCharacters = params => {
  const paramStringify = qs.stringify(params, {skipNulls: true});
  const url = `/character?${paramStringify}`;
  return instance.get(url);
};
