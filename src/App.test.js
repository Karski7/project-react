import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';

test('renders selected list columns', () => {
  render(
    <MemoryRouter initialEntries={['/list/1']}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );

  expect(screen.getByText('Books')).toBeInTheDocument();
  expect(screen.getByText('Movies')).toBeInTheDocument();
  expect(screen.getByText('Games')).toBeInTheDocument();
});
