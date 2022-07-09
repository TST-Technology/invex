import React, { useState } from 'react';

const ReadMore = ({ text, limit }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = (e) => {
    e.stopPropagation();
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <div className='mb-4'>
        {text ? (
          isReadMore ? (
            text.slice(0, limit)
          ) : (
            <p
              className='text mb-0'
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
          )
        ) : (
          '-'
        )}
        {text && text.length - 1 > limit ? (
          <span
            onClick={toggleReadMore}
            style={{ color: 'blue', cursor: 'pointer' }}
            className='read-or-hide'
          >
            {isReadMore ? ' Read More...' : ' Read Less...'}
          </span>
        ) : null}
      </div>
    </>
  );
};

export default ReadMore;
