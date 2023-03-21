import RestaurarantMenu from '../RestaurantMenu';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { render, waitFor } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import data from '../../mocks/mockMenuData';
import Header from '../Header';

global.scrollTo = jest.fn();

global.axios = {
  get: jest.fn(() => {
    return Promise.resolve({ data });
  }),
};

test('Testing : clicking Add Button updates cart', async () => {
  const menu = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurarantMenu />
      </Provider>
    </StaticRouter>
  );
  await waitFor()
});
