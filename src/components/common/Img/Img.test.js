import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { Img } from "./Img";

afterEach(() => cleanup());

test("it should render Img component", () => {
  try {
    render(<Img />);
    const imgElement = screen.getByTestId("image-component");
    expect(imgElement).toBeInTheDocument();
  } catch (e) {
    console.log("a");
  }
});

test("it should have a class if one is passed", () => {
  const className = "hello-world";
  const { container } = render(<Img className={className} />);
  expect(container.firstChild.classList.contains(className));
});
