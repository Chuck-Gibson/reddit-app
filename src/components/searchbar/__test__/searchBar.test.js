import { create } from "react-test-renderer";
import { screen, cleanup, fireEvent, render } from "@testing-library/react";
import SearchBar from "../searchBar";

afterEach(() => cleanup);
beforeEach(() => render(<SearchBar />));

describe("Search bar integration tests", () => {
  it("should render input and submit", () => {
    const buttonElement = screen.getByRole("button");
    const inputElement = screen.getByRole("search");

    expect(buttonElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it("should clear the input field when submit button is clicked", () => {
    const buttonElement = screen.getByRole("button");
    const placeholderText = screen.getByPlaceholderText("Search something...");
    const userInput = screen.getByRole("search");

    // Type search queries
    fireEvent.change(userInput, {
      target: {
        value: "hello",
      },
    });
    // Set proper value
    expect(userInput.value).toBe("hello");
    // Click search button
    fireEvent.click(buttonElement);
    // Clear input
    expect(userInput.value).toBe("");
    // Place holder text visible
    expect(placeholderText).toBeVisible();
  });
});

describe("Search bar snapshot testing", () => {
  it("should render with no value", () => {
    const treeNodes = create(<SearchBar />);

    expect(treeNodes.toJSON()).toMatchSnapshot();
  });
});
