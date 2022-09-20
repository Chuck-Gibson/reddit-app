import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { SubmitButton } from "../SubmitButton";

afterEach(() => cleanup);

const mockFn = jest.fn();

describe("Tests for Searchbar submit button", () => {
  it("renders on the screen", () => {
    const { container } = render(<SubmitButton handleSubmit={mockFn} />);

    const buttonElement = container.firstChild;
    expect(buttonElement).toBeVisible();
  });

  it("should call the a function on click event", () => {
    render(<SubmitButton handleSubmit={mockFn} />);
    const buttonElement = screen.getByRole("button");

    fireEvent.click(buttonElement);
    expect(mockFn).toHaveBeenCalled();
  });
});
