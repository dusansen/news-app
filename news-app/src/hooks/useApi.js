import { useAppContext } from '../store/context';
import { fetchArticles } from '../api/articles';
import { SET_ARTICLES } from '../store/constants';
import { TOP_ARTICLES_CATEGORY, SEARCH_CATEGORY } from '../utils/constants';

const useApi = () => {
  const { dispatch } = useAppContext();

  const getArticles = async params => {
    const { category, q } = params;
    const articleCategory = category ? category : q !== undefined ? SEARCH_CATEGORY : TOP_ARTICLES_CATEGORY;

    dispatch({
      type: SET_ARTICLES,
      payload: {
        category: articleCategory,
        data: null,
        loading: true
      }
    });
    const { status, data } = await fetchArticles(params);
    if (status === 200) {
      dispatch({
        type: SET_ARTICLES,
        payload: {
          category: articleCategory,
          data: data.articles,
          loading: false
        }
      });
    }
  }

  return { getArticles };
};

export default useApi;