import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { getSynopsisCompanyNews } from '../../api/Symbol';

const SynopsisNews = () => {
  const { symbol } = useParams();
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (symbol) {
      getNewsData();
    }
  }, [symbol]);

  const getNewsData = async () => {
    setIsLoading(true);
    const data = await getSynopsisCompanyNews({ symbol: symbol });
    if (data && data?.status === 200 && data?.data) {
      setNewsData(data?.data);
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <div
          style={{
            height: 450,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </div>
      )}
      {!isLoading && (
        <div className='col-lg-12'>
          <div className='market_news mb-5'>
            <div className='d-flex align-items-center justify-content-between'>
              <h5 className='m-0'>
                <strong>Company News</strong>
              </h5>
              <a href='javascript:void(0)' className='text-dark viewmore'>
                View More
              </a>
            </div>
            <div className='row'>
              {newsData &&
                newsData.slice(0, 15).map((news, index) => {
                  return (
                    <div className='col-lg-4' key={index}>
                      <div className='news_block mt-3 mb-3'>
                        <div className='news_img'>
                          <a href='javascript:void(0);'>
                            <img
                              src={news?.image}
                              className='img-fluid'
                              alt='news_image'
                            />
                          </a>
                        </div>
                        <div className='news_content'>
                          <a href='javascript:void(0);' className='text-dark'>
                            <h5>{news?.title}</h5>
                          </a>
                          <a
                            href='javascript:void(0);'
                            className='text-primary'
                          >
                            {news?.site}
                          </a>
                          {/* <span> · Money Wise</span> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SynopsisNews;
