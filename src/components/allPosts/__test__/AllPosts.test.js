import { render, screen, cleanup } from "@testing-library/react";
import AllPosts from "../AllPosts";
import { Provider } from "react-redux";
import store from "store/store.js";

afterEach(() => cleanup());

test("It should render properly", () => {
  render(
    <Provider store={store}>
      <AllPosts />
    </Provider>
  );
  const allPostsElement = screen.getByTestId("component--allPosts");
  expect(allPostsElement).toBeInTheDocument();
});
