import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

test('renders app columns', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText('Books')).toBeInTheDocument();
  expect(screen.getByText('Movies')).toBeInTheDocument();
  expect(screen.getByText('Games')).toBeInTheDocument();
});
