import Header from '../Header';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { StaticRouter } from 'react-router-dom/server';

test('Test to check if header component has logo', () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getByTestId('logo');
  expect(logo.src).toBe('http://localhost/dummy.png');
});

//test2
test('Test to check if header component has cart items set to 0 initially', () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId('cart');
  expect(cart.innerHTML).toBe("0");
});
