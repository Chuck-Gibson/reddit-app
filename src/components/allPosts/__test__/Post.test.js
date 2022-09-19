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

test("It renders proper title", () => {
  const title = "Hello world";
  render(
    <Provider store={store}>
      <Post title={title} />
    </Provider>
  );
  const renderedTitle = screen.getByText(title);
  expect(renderedTitle).toBeInTheDocument();
});

test("It renders proper author", () => {
  const author = "foobar";
  render(
    <Provider store={store}>
      <Post author={author} />
    </Provider>
  );
  const renderedText = screen.getByText(`u/${author}`);
  expect(renderedText).toBeInTheDocument();
});

test("It should renders proper subreddit", () => {
  const subreddit = "foobar";
  render(
    <Provider store={store}>
      <Post subreddit={subreddit} />
    </Provider>
  );
  const renderedText = screen.getByText(subreddit);
  expect(renderedText).toBeInTheDocument();
});

test("It renders proper voteScore", () => {
  const voteScore = 123;
  render(
    <Provider store={store}>
      <Post voteScore={voteScore} />
    </Provider>
  );
  const renderedText = screen.getByText(voteScore);
  expect(renderedText).toBeInTheDocument();
});

test("It renders proper commentCount", () => {
  const commentCount = 123;
  render(
    <Provider store={store}>
      <Post commentCount={commentCount} />
    </Provider>
  );
  const renderedText = screen.getByText(commentCount);
  expect(renderedText).toBeInTheDocument();
});
