import useApi from '../useApi';
import { useAppContext } from '../../store/context';
import { SET_ARTICLES, SET_ERROR_MESSAGE } from '../../store/constants';
import { fetchArticles } from '../../api/articles';

jest.mock('../../store/context');
jest.mock('../../api/articles');

describe('useApi hook', () => {
  const category = 'sport';
  const params = { category };
  const dispatch = jest.fn();
  useAppContext.mockReturnValue({
    dispatch
  });
  const { getArticles } = useApi();
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch articles and save to store if status is 200', async () => {
    const responseData = {
      articles: [{ title: 'title ' }]
    };

    fetchArticles.mockReturnValueOnce({
      status: 200,
      data: responseData
    });

    await getArticles(params);

    expect(dispatch).toHaveBeenCalledWith({
      type: SET_ARTICLES,
      payload: {
        category,
        data: null,
        loading: true
      }
    });
    expect(fetchArticles).toHaveBeenCalledWith(params);
    expect(dispatch).toHaveBeenCalledWith({
      type: SET_ARTICLES,
      payload: {
        category,
        data: responseData.articles,
        loading: false
      }
    });
  });

  it('should set error message when fetching articles fail', async () => {
    fetchArticles.mockImplementationOnce(params => {
      throw new Error('error');
    });

    await getArticles(params);

    expect(dispatch).toHaveBeenCalledWith({
      type: SET_ARTICLES,
      payload: {
        category,
        data: null,
        loading: true
      }
    });
    expect(fetchArticles).toHaveBeenCalledWith(params);
    dispatch({
      type: SET_ARTICLES,
      payload: {
        category,
        data: [],
        loading: false
      }
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: SET_ERROR_MESSAGE,
      payload: 'Failed while fetching articles'
    });
  });
});
