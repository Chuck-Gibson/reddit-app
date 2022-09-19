import { SearchInput } from "../SearchInput";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

afterEach(() => cleanup);

describe("SearchInput component test", () => {
  it("should render", () => {
    const { container } = render(<SearchInput />);
    const inputElement = container.firstChild;
    expect(inputElement).toBeInTheDocument();
  });

  it("it should have a placeholder text", () => {
    const placeholder = "Search something...";
    render(<SearchInput />);
    const inputElement = screen.getByPlaceholderText(/search something.../i);
    expect(inputElement.placeholder).toBe(placeholder);
  });

  it("should render the correct `value`", () => {
    const value = "hello world";
    render(<SearchInput value={value} />);
    const inputElement = screen.getByRole("search");
    expect(inputElement.value).toBe(value);
  });
});
