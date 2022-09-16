import { ReactComponent as Arrow } from "assets/arrow.svg";

export const Vote = ({ voteScore }) => {
  const handleVote = (_, score) => {
    // TODO: Post request for vote after oauth
  };
  return (
    <div className="vote">
      <span
        onClick={handleVote(1)}
        aria-label="up vote"
        className="vote--btn btn up"
      >
        <Arrow />
      </span>

      <span className="post--vote-score">{voteScore}</span>

      <span
        onClick={handleVote(-1)}
        aria-label="down vote"
        className="vote--btn btn down"
      >
        <Arrow />
      </span>
    </div>
  );
};
