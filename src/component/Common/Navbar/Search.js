import React, { useState } from 'react'
import { List, ListItem, ListItemText, Typography } from '@material-ui/core'


const Search = ({ navbarSearch, handleSearch, handleClick, SearchResult}) => {
    
    return (
        <>
            <form onSubmit={(e)=>e.preventDefault()} className="form-group search-blk mx-auto" role="search" method="get" id="searchform" action="">
                <div className="input-group">
                    <input type="text" value={navbarSearch} onChange={(e) => handleSearch(e.target.value)} name="s" className="form-control" placeholder="Search for symbol, company and news" id="example-search-input" autoComplete="off" />
                    <input type="submit" value="Search" id="search-submit" style={{ "display": "none" }} />
                    <span className="input-group-append d-flex align-items-center">
                        <a href="/#"><p><img src={require("../Images/⌘K.png").default} alt="" /></p></a>
                        <label htmlFor="search-submit"><img src={require("../Images/search.png").default} alt="search-icon" className="img-fluid" height="16" width="16" /></label>
                    </span>
                </div>
                {SearchResult && SearchResult?.data?.length > 0 && <List className='search-result' sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {SearchResult && SearchResult?.data?.length > 0 && SearchResult.data.map((list,i)=>{
                        return <ListItem alignItems="flex-start" onClick={() => handleClick(`/symbol?symbol=${list.symbol}`)}>
                                    <ListItemText
                                        primary={list.symbol+' - '+list.securityName}
                                        secondary={
                                            <>
                                                <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                                    {list.exchangeName}
                                                </Typography>
                                            </>
                                        }
                                    />
                                </ListItem>
                        })
                    }
                    </List>}
            </form>
            
        </>
    )
}

export default Search