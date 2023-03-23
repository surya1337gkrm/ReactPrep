import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import Body from '../Body';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { StaticRouter } from 'react-router-dom/server';
import data from '../../mocks/mockApiData';

global.scrollTo = jest.fn();
global.axios = {
  get: jest.fn(() => {
    return Promise.resolve({ data });
  }),
  // get:jest.fn().mockResolvedValue({data})
};

//mocking fetch
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve({ data }),
  });
});

test('Test for Shimmer Component when data is loading', () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId('shimmer');
  expect(shimmer.children.length).toBe(10);
});

test('Testing for Restaurant Cards', async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  screen.debug(body.container);

  await waitFor(() => {
    const resNode = body.getByTestId('resList');
    expect(resNode.children.length).not.toBe(0);
  });
});

test('Searching for Pizza', async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    const resNode = body.getByTestId('resList');
    // expect(resNode.children.length).not.toBe(0);
    const searchInput = body.getByTestId('searchInput');
    const searchBtn = body.getByTestId('searchBtn');

    fireEvent.change(searchInput, {
      target: {
        value: 'Pizza',
      },
    });

    fireEvent.click(searchBtn);
  });

  await waitFor(() => {
    const resNodes = body.getByTestId('resList');
    expect(resNodes.children.length).toBe(2);
  });
});
