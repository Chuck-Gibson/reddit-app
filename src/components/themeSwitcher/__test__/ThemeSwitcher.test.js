import { useRef } from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { create } from 'react-test-renderer';

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

beforeEach(() => render(<MockApp />));
afterEach(() => cleanup());

describe('Test for theme switcher', () => {
  it('changes dataset-theme of node', () => {
    const root = screen.getByTestId('rootDiv');
    const currentTheme = root.dataset.theme; // Theme before click event
    const btn = screen.getByRole('button'); // Theme switcher button

    fireEvent.click(btn);

    expect(root.dataset.theme).not.toBe(currentTheme);
  });

  describe('Snapshot testing', () => {
    it('matches snapshop testing', () => {
      const rootNode = create(<MockApp />);

      expect(rootNode.toJSON()).toMatchSnapshot();
    });
  });
});
