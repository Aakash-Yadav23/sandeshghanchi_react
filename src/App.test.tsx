import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const learnReactLink = screen.getByText(/learn react/i);  // Use a regular expression for case-insensitive matching
  expect(learnReactLink).toBeInTheDocument();
});
