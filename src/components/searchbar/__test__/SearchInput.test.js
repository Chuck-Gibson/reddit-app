import { create, act } from "react-test-renderer";
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

  it("should have a placeholder text", () => {
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
    let _userInput = "";

    const mockSetValue = jest.fn().mockImplementation((e) => {
      _userInput += e.target.value;
    });

    render(<SearchInput handleChange={mockSetValue} value={_userInput} />);

    const inputElement = screen.getByRole("search");

    fireEvent.change(inputElement, { target: { value: _string } });

    expect(_string === _userInput).toBe(true); // checking values
  });
});

describe("SearchInput snapshot tests", () => {
  it("renders the proper value of user input", () => {
    const mockFn = jest.fn();

    // Create a root node
    let treeNode;
    act(() => {
      treeNode = create(<SearchInput value={""} handleChange={mockFn} />);
    });
    // Assertion on initial render
    expect(treeNode.toJSON()).toMatchSnapshot();

    // User keyboard event
    act(() => {
      treeNode.update(<SearchInput value={"foo bar"} handleChange={mockFn} />);
    });
    // Assertion on updated render, the component holds the proper value
    expect(treeNode.toJSON()).toMatchSnapshot();
  });
});
