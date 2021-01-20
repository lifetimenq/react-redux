import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const result = render(<App />);
  
  const loaderElement1 = result.getByText(/Содержание книги/i);
  expect(loaderElement1).toBeTruthy();
});
