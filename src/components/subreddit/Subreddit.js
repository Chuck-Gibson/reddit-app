import React, { useEffect, useState } from 'react';
import { FETCH_URL } from 'store/slices/constant';
import { SubredditView } from './SubredditView';

const Subreddit = () => {
  const [sub, setSub] = useState([]);
  const [selectedSub, setSelectedSub] = useState('');

  useEffect(() => {
    if (sub[0]) console.log(sub);
  }, [sub]);

  useEffect(() => {
    let fetchingUrl = FETCH_URL;
    fetchingUrl += '/sr/popular';

    const response = fetch(fetchingUrl);
    response
      .then((res) => res.json())
      .then((data) => setSub(() => data))
      .catch((err) => console.log(err));
  }, [selectedSub]);

  const handleClick = (_, selectedSub) => {
    console.log(selectedSub);
    // setSelectedSub(() => selectedSub);
  };

  if (sub.length !== 0)
    return (
      <>
        <SubredditView
          data={sub}
          handleClick={handleClick}
          selected={selectedSub}
        />
      </>
    );

  return <>LOADING???</>;
};

export default Subreddit;
