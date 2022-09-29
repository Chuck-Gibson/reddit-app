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

  it('should be disabled when loading state is true', () => {
    const state = true;
    render(
      <Button
        handleClick={mockFn}
        isLoading={state}
      >
        Foo
      </Button>
    );

    const button = screen.getByRole('button');
    const buttonState = button.hasAttribute('disabled', 'true');
    expect(buttonState).toBe(state);
  });
});
