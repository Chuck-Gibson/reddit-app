import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { SubmitButton } from '../SubmitButton';

afterEach(() => cleanup);

const mockFn = jest.fn();

describe('Tests for Searchbar submit button', () => {
  it('renders on the screen', () => {
    const { container } = render(
      <SubmitButton handleSubmit={mockFn}>foo</SubmitButton>
    );

    const buttonElement = container.firstChild;
    expect(buttonElement).toBeVisible();
  });

  it('should call the a function on click event', () => {
    render(<SubmitButton handleSubmit={mockFn}>foo</SubmitButton>);
    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);
    expect(mockFn).toHaveBeenCalled();
  });

  it('should have a class name if one is passed', () => {
    const className = 'foo';
    render(
      <SubmitButton
        _className={className}
        handleSubmit={mockFn}
      >
        bar
      </SubmitButton>
    );
    const buttonElement = screen.getByRole('button');
    expect(buttonElement.classList.contains(className));
  });
});
