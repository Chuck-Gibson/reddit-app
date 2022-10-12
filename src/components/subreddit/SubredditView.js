export const SubredditView = ({ handleClick, selected, data }) => {
  const getSubs = () => {
    return data.map((item) => {
      return (
        <li
          key={item.id}
          onClick={handleClick(item.id)}
        >
          {item.display_name}
        </li>
      );
    });
  };
  return <ul>{getSubs()}</ul>;
};
