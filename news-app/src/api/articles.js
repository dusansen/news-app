import { axiosClient } from './axios';
import { buildQueryParams } from '../utils/query';

export const fetchArticles = async (params) => {
  const queryParams = buildQueryParams(params);

  return await axiosClient.get(`top-headlines?${queryParams}`);
};