import { SearchInput } from "../SearchInput";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

afterEach(() => cleanup);

describe("SearchInput component test", () => {
  it("should render", () => {
    const { container } = render(
      <SearchInput handleChange={() => null} value={""} />
    );

    const inputElement = container.firstChild;
    expect(inputElement).toBeInTheDocument();
  });

  it("it should have a placeholder text", () => {
    const placeholder = "Search something...";
    render(<SearchInput value={""} handleChange={() => null} />);

    const inputElement = screen.getByPlaceholderText(/search something.../i);
    expect(inputElement.placeholder).toBe(placeholder);
  });

  it("should have the correct `value`", () => {
    const value = "hello world";
    render(<SearchInput handleChange={() => null} value={value} />);

    const inputElement = screen.getByRole("search");
    expect(inputElement.value).toBe(value);
  });

  it("should change the `value` as user types", () => {
    const _string = "Hello world";
    let userInput = "";
    const mockSetValue = jest.fn();
    mockSetValue.mockImplementation((e) => {
      userInput += e.target.value;
    });

    render(<SearchInput handleChange={mockSetValue} value={userInput} />);

    const inputElement = screen.getByRole("search");
    fireEvent.change(inputElement, { target: { value: _string } });
    expect(mockSetValue).toHaveBeenCalled(); // expect set value function called
  });
});
