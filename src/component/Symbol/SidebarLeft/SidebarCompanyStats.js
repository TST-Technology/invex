import React, { useState } from 'react'

import marked from "../../Common/Images/marked_img.png";
import unMarked from "../../Common/Images/image4.png";
import abbreviateNumber from '../../Common/NumberFormat';

function SidebarCompanyStats({ Company, KeyStatus }) {
  const [showBookmark, setShowBookmark] = useState(false)

  const bookmarkToggleHandler = () => {
    setShowBookmark(state => !state)
  }

  const [showMore, setShowMore] = useState(false);

  const bookmarkClass = `upper ${showBookmark ? 'marked' : ''}`
  return (
    <div className='card companyviewblk compny_left_detail mb-4'>
      <div className='saved-blk'>
        <a href='javascript:void(0);'>
          <img
            onClick={bookmarkToggleHandler}
            className={bookmarkClass}
            src={showBookmark ? marked : unMarked}
            alt='bookmark'
          />
        </a>
      </div>
      <div className='card-body'>
        <div className='description-para' style={showMore ? { maxHeight: "none", overflow: "visible" } : { maxHeight: "380px", overflow: "hidden" }}>
          <div className='logo'>
            <div className='img'>
              <img src={require("../../Common/Images/image1.png").default} alt='image' />
            </div>
            <div className='title1'>
              <h5 className='card-title'>{Company?.companyName}</h5>
              <p className='company'>{Company?.symbol}</p>
            </div>
          </div>
          <div className='sector_industry'>
            <span className='badge bg-light text-dark'>
              Sector: {Company?.sector}
            </span>
            <span className='badge bg-light text-dark'>
              Industry: {Company?.industry}
            </span>
          </div>
          <div className='chart mb-4 mt-2'>
            <div className='chart-text'>
              <p className={KeyStatus?.latestPrice > 0 ? 'card-text up' : 'card-text down'}>$ {KeyStatus?.latestPrice}</p>
              <p className={KeyStatus?.latestPrice > 0 ? 'text up' : 'text down'}>{KeyStatus?.change > 0 ? <>{KeyStatus?.change}</> : <> {KeyStatus?.change}</>} ({KeyStatus?.changePercent}%)</p>
            </div>
          </div>
          <div className='key_status'>
            <h6>
              <strong>Key Status</strong>
            </h6>
            <ul>
              <li>
                <a href='javascript:void(0)'>Market Cap</a> <span>{abbreviateNumber(KeyStatus?.marketCap)}</span>
              </li>
              <li>
                <a href='javascript:void(0)'>Current Price</a>{' '}
                <span>{KeyStatus?.latestPrice}</span>
              </li>
              <li>
                <a href='javascript:void(0)'>Volume</a> <span>{abbreviateNumber(KeyStatus?.volume)}</span>
              </li>
              <li>
                <a href='javascript:void(0)'>Avg Vol</a> <span>{abbreviateNumber(KeyStatus?.avgTotalVolume)}</span>
              </li>
              <li>
                <a href='javascript:void(0)'>P/E Ratio</a> <span>{KeyStatus?.peRatio}</span>
              </li>
            </ul>
          </div>
        </div>
        <button className='text-primary readmore' onClick={() => setShowMore(!showMore)} style={showMore ? { display: 'none' } : {}} >Read More </button>
        <button className='text-primary readless' onClick={() => setShowMore(!showMore)} style={showMore ? {} : { display: 'none' }}>
          Read Less{' '}
        </button>
      </div>
    </div>
  )
}

export default SidebarCompanyStats