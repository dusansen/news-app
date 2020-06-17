import { useAppContext } from '../store/context';
import { fetchHeadlines } from '../api/headlines';
import { SET_HEADLINES } from '../store/constants';

const useApi = () => {
  const { dispatch } = useAppContext();

  const getHeadlines = async params => {
    const { status, data } = await fetchHeadlines(params);
    console.log('use api get headlines: ', data);
    if (status === 200) {
      dispatch({
        type: SET_HEADLINES,
        payload: {
          category: params.category || 'all',
          data: data.articles
        }
      });
    }
  }

  return { getHeadlines };
};

export default useApi;