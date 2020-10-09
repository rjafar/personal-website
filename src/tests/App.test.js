import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders revan jafar link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Revan Jafar/i);
  expect(linkElement).toBeInTheDocument();
});
