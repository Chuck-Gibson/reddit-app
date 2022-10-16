export const SubredditView = ({ setSub, selected, data }) => {
  const getSubs = () => {
    return data.map((item) => {
      return (
        <li
          key={item.id}
          onClick={() => setSub(() => item.id)}
          className={selected === item.id ? 'selected' : ''}
        >
          {item.display_name}
        </li>
      );
    });
  };
  return (
    <section id='subreddit'>
      <h2>R/Subreddit</h2>
      <ul className='subreddit'>{getSubs()}</ul>
    </section>
  );
};
