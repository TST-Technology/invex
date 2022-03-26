import React from 'react'
import marked_img from '../Common/Images/marked_img.png'
import image1 from '../Common/Images/image1.png'
import resource_1 from '../Common/Images/resource_1.png'
import resource_2 from '../Common/Images/resource_2.png'
import resource_3 from '../Common/Images/resource_3.png'
import resource_4 from '../Common/Images/resource_4.png'
const sidebar = ({Company}) => {
    return (
        <div class="col-lg-4">
            <div class="card companyviewblk compny_left_detail mb-4">
                <div class="saved-blk"><a href="javascript:void(0);">
                    <img class="upper marked" src={marked_img} alt="bookmark" /></a>
                </div>
                <div class="card-body">
                    <div class="description-para">
                        <div class="logo">
                            <div class="img">
                                <img src={image1} alt="image" />
                            </div>
                            <div class="title1">
                                <h5 class="card-title">{Company?.companyName}</h5>
                                <p class="company">{Company?.symbol}</p>
                            </div>
                        </div>
                        <div class="sector_industry">
                            <span class="badge bg-light text-dark">Sector: {Company?.sector}</span>
                            <span class="badge bg-light text-dark">Industry: {Company?.industry}</span>
                        </div>
                        <div class="chart mb-4 mt-2">
                            <div class="chart-text">
                                <p class="card-text up">$235.49 -10</p>
                                <p class="text up">+3.10 (+1.3%) -10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card companyviewblk resource_block mb-4">
                <div class="card-body">
                    <h5 class="mb-4"><strong>Resource</strong></h5>
                    <ul>
                        {/* <li>
                            <a href="#">
                                <img src={resource_1} alt="resource" />
                                <span>Financial Statements</span>
                                <i class="bi bi-box-arrow-up-right ms-auto"></i>
                            </a>
                        </li> */}
                        <li>
                            <a href="#">
                                <img src={resource_2} alt="resource" />
                                <span>Industry Report</span>
                                <i class="bi bi-box-arrow-up-right ms-auto"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={resource_3} alt="resource" />
                                <span>Financial Statistics</span>
                                <i class="bi bi-box-arrow-up-right ms-auto"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={resource_4} alt="resource" />
                                <span>View SEC Filings</span>
                                <i class="bi bi-box-arrow-up-right ms-auto"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default sidebar