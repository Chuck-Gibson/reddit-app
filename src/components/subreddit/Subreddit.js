import React, { useEffect, useState } from 'react';
import { FETCH_URL } from 'store/slices/constant';
import { SubredditView } from './SubredditView';
import './subreddit.css';

const Subreddit = () => {
  const [sub, setSub] = useState([]);
  const [selectedSub, setSelectedSub] = useState('');

  useEffect(() => {
    let fetchingUrl = FETCH_URL;
    fetchingUrl += '/sr/popular';

    const response = fetch(fetchingUrl);
    response
      .then((res) => res.json())
      .then((data) => setSub(() => data))
      .catch((err) => console.log(err));
  }, [selectedSub]);

  if (sub.length !== 0)
    return (
      <>
        <SubredditView
          data={sub}
          setSub={setSelectedSub}
          selected={selectedSub}
        />
      </>
    );

  return <>LOADING???</>;
};

export default Subreddit;
