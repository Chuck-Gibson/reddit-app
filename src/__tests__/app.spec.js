import { render, screen } from '@testing-library/react';
import App from '../components/app';


describe('renders', () => {
test('renders app to screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
})});