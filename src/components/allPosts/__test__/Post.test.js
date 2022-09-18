import { render, screen, cleanup } from "@testing-library/react";
import { Post } from "../Post";
import { Provider } from "react-redux";
import store from "store/store.js";

afterEach(() => cleanup());

test("it should render the Post component", () => {
  render(
    <Provider store={store}>
      <Post />
    </Provider>
  );
  const postElement = screen.getByTestId("allPosts-component--Post");
  expect(postElement).toBeInTheDocument();
});
