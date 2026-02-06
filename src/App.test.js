import { render, screen } from '@testing-library/react';
import App from './App';

test('renders VITALIS Healthcare Services', () => {
  render(<App />);
  const linkElement = screen.getByText(/VITALIS/i);
  expect(linkElement).toBeInTheDocument();
});
