import React from 'react'

function CompanyNews () {

  const newsData = [
    {
        img:"news-1.png",
        title:"Lucid shares soar on news of first electric sedan deliveries",
        business:"Money Wise"
    },
    {
        img:"news-2.png",
        title:"Lucid shares soar on news of first electric sedan deliveries",
        business:"Money Wise"
    },
    {
        img:"news-3.png",
        title:"Lucid shares soar on news of first electric sedan deliveries",
        business:"Money Wise"
    },
    {
        img:"news-4.png",
        title:"Lucid shares soar on news of first electric sedan deliveries",
        business:"Money Wise"
    },
    {
        img:"news-5.png",
        title:"Lucid shares soar on news of first electric sedan deliveries",
        business:"Money Wise"
    },
    {
        img:"news-6.png",
        title:"Lucid shares soar on news of first electric sedan deliveries",
        business:"Money Wise"
    },
    {
        img:"news-7.png",
        title:"Lucid shares soar on news of first electric sedan deliveries",
        business:"Money Wise"
    },
    {
        img:"news-8.png",
        title:"Lucid shares soar on news of first electric sedan deliveries",
        business:"Money Wise"
    },
    {
        img:"news-9.png",
        title:"Lucid shares soar on news of first electric sedan deliveries",
        business:"Money Wise"
    },
    {
        img:"news-10.png",
        title:"Lucid shares soar on news of first electric sedan deliveries",
        business:"Money Wise"
    },
  ]

  return (
    <div class='market_news mb-5'>
      <div class='d-flex align-items-center justify-content-between bg-light p-3 border-bottom-0'>
        <h6 class='m-0'>
          <strong>Company News</strong>
        </h6>
        <a href='javascript:void(0)' class='text-dark viewmore'>
          View More
        </a>
      </div>
      <div class='row'>
        {
            newsData.map((data,index)=>{
              return(
                <div class='col-lg-6'>
                  <div class='news_block mt-3 mb-3'>
                    <div class='news_img'>
                      <a href='javascript:void(0);'>
                        <img
                          src={require("../../Common/Images/"+data.img).default}
                          class='img-fluid'
                          alt='news_image'
                        />
                      </a>
                    </div>
                    <div class='news_content'>
                      <a href='javascript:void(0);' class='text-dark'>
                        <h5>
                          {data.title}
                        </h5>
                      </a>
                      <a href='javascript:void(0);' class='text-primary'>
                        Business
                      </a>
                      <span> · {data.business}</span>
                    </div>
                  </div>
                </div>

              )
            })
        } 
      </div>
    </div>
  )
}

export default CompanyNews
