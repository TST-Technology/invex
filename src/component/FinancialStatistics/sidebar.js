import React from 'react'
import marked_img from '../Common/Images/marked_img.png'
import image1 from '../Common/Images/image1.png'
import resource_1 from '../Common/Images/resource_1.png'
import resource_2 from '../Common/Images/resource_2.png'
import resource_3 from '../Common/Images/resource_3.png'
import resource_4 from '../Common/Images/resource_4.png'
const sidebar = ({Company}) => {
    return (
        <div className="col-lg-4">
            <div className="card companyviewblk compny_left_detail mb-4">
                <div className="saved-blk"><a href="javascript:void(0);">
                    <img className="upper marked" src={marked_img} alt="bookmark" /></a>
                </div>
                <div className="card-body">
                    <div className="description-para">
                        <div className="logo">
                            <div className="img">
                                <img src={image1} alt="image" />
                            </div>
                            <div className="title1">
                                <h5 className="card-title">{Company?.companyName}</h5>
                                <p className="company">{Company?.symbol}</p>
                            </div>
                        </div>
                        <div className="sector_industry">
                            <span className="badge bg-light text-dark">Sector: {Company?.sector}</span>
                            <span className="badge bg-light text-dark">Industry: {Company?.industry}</span>
                        </div>
                        <div className="chart mb-4 mt-2">
                            <div className="chart-text">
                                <p className="card-text up">$235.49</p>
                                <p className="text up">+3.10 (+1.3%)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card companyviewblk resource_block mb-4">
                <div className="card-body">
                    <h5 className="mb-4"><strong>Resource</strong></h5>
                    <ul>
                        <li>
                            <a href="#">
                                <img src={resource_1} alt="resource" />
                                <span>Financial Statements</span>
                                <i className="bi bi-box-arrow-up-right ms-auto"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={resource_2} alt="resource" />
                                <span>Industry Report</span>
                                <i className="bi bi-box-arrow-up-right ms-auto"></i>
                            </a>
                        </li>
                        {/* <li>
                            <a href="#">
                                <img src={resource_3} alt="resource" />
                                <span>Financial Statistics</span>
                                <i className="bi bi-box-arrow-up-right ms-auto"></i>
                            </a>
                        </li> */}
                        <li>
                            <a href="#">
                                <img src={resource_4} alt="resource" />
                                <span>View SEC Filings</span>
                                <i className="bi bi-box-arrow-up-right ms-auto"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default sidebar