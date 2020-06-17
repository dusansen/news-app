import { useAppContext } from '../store/context';
import { fetchArticles } from '../api/articles';
import { SET_ARTICLES } from '../store/constants';

const useApi = () => {
  const { dispatch } = useAppContext();

  const getArticles = async params => {
    dispatch({
      type: SET_ARTICLES,
      payload: {
        category: params.category || 'all',
        data: null,
        loading: true
      }
    });
    const { status, data } = await fetchArticles(params);
    if (status === 200) {
      dispatch({
        type: SET_ARTICLES,
        payload: {
          category: params.category || 'all',
          data: data.articles,
          loading: false
        }
      });
    }
  }

  return { getArticles };
};

export default useApi;