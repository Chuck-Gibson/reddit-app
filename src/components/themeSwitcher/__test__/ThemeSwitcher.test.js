import { useRef } from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

const MockApp = () => {
  const node = useRef();
  return (
    <div
      className='App'
      dataset-theme='dark'
      data-testid='rootDiv'
      ref={node}
    >
      <ThemeSwitcher node={node} />
    </div>
  );
};

beforeEach(() => {
  render(<MockApp />);
});
afterEach(() => cleanup());

describe('Test for theme switcher', () => {
  it('changes dataset-theme of node', () => {
    const root = screen.getByTestId('rootDiv');
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(root.data.theme).toBe('light');
  });
});
