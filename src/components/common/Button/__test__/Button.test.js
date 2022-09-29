import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

beforeEach(() => cleanup);

const mockFn = jest.fn();

describe('Tests for Button components', () => {
  it('should call the function when pressed', () => {
    render(<Button handleClick={mockFn}>Bar</Button>);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalled();
  });

  it('should have a pending class when loading state is true', () => {
    const isLoading = true;
    render(
      <Button
        handleClick={mockFn}
        _className={isLoading ? 'pending' : 'ok'}
      >
        Foo
      </Button>
    );

    const button = screen.getByRole('button');
    const buttonState = button.classList.contains('pending');
    expect(buttonState).toBe(true);
  });
});
