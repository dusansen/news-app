import { fetchArticles } from '../articles';
import { axiosClient } from '../axios';

jest.mock('../axios');

describe('articles api', () => {
  it('should call api for fetching articles with correct query parameters', async () => {
    const params = {
      category: 'sport',
      pageSize: 5
    };
    const queryParams = 'category=sport&pageSize=5'

    await fetchArticles(params);

    expect(axiosClient.get).toHaveBeenCalledWith(`top-headlines?${queryParams}`);
  });
});
