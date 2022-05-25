import React, { useState } from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { getSearchdata } from '../../../api/search';
import { useNavigate } from 'react-router-dom';

const SearchCompany = () => {
  const [SearchResult, setSearchResult] = useState(null);
  const [navbarSearch, setNavbarSearch] = useState(null);
  const [date, setdate] = useState('2022/05/11');
  const navigate = useNavigate();
  const handleSearch = async (val) => {
    try {
      if (val) {
        var data = await getSearchdata(val);
        if (data && data?.dataLength > 0 && data?.status === 200) {
          setSearchResult(data);
        }
      }
    } catch (err) {
      console.log('err', err);
      setSearchResult(null);
    }
  };
  const handleClick = (url) => {
    console.log(url);
    if (url) {
      navigate(url);
      setSearchResult(null);
    }
  };
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='form-group search-blk2 common_search mx-auto'
        role='search'
        method='get'
        id='searchform'
        action=''
      >
        <div className='input-group'>
          <input
            type='text'
            value={navbarSearch}
            onChange={(e) => handleSearch(e.target.value)}
            name='s'
            className='form-control'
            placeholder='Search for Symbol'
            id='example-search-input'
            autocomplete='off'
          />
          <input
            type='submit'
            value='Search'
            id='search-submit'
            style={{ display: 'none' }}
          />
          <span className='input-group-append d-flex align-items-center'>
            <label htmlFor='search-submit'>
              <img
                src={require('../../../Common/Images/search-b.png').default}
                alt='search-icon'
                className='img-fluid'
                height='16'
                width='16'
              />
            </label>
          </span>
        </div>

        {SearchResult && SearchResult?.data?.length > 0 && (
          <List
            className='search-result '
            sx={{ width: '10px', height: '10px', bgcolor: 'background.paper' }}
          >
            {SearchResult &&
              SearchResult?.data?.length > 0 &&
              SearchResult.data.map((list, i) => {
                return (
                  <ListItem
                    alignItems='flex-start'
                    onClick={() =>
                      handleClick(`/options?symbol=${list.symbol}`)
                    }
                  >
                    <ListItemText
                      primary={list.symbol + ' - ' + list.securityName}
                      secondary={
                        <>
                          <Typography
                            sx={{ display: 'inline' }}
                            component='span'
                            variant='body2'
                            color='text.primary'
                          >
                            {list.exchangeName}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                );
              })}
          </List>
        )}
      </form>
    </>
  );
};

export default SearchCompany;
