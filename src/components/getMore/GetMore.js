import React from 'react';
import { Button } from 'components/common/Button/Button';
import './GetMore.css';

export const GetMoreBtn = () => {
  const handleClick = () => null;
  return (
    <>
      <Button
        handleClick={handleClick}
        isLoading={false}
        _className='btn--get-more btn--primary'
      >
        Get more
      </Button>
    </>
  );
};
