import React from 'react'
import { wishListData } from './myWishListData'

const MyWhishList = () => {

    // console.log(wishListData)

    return (
        <>
            <div className="whishlist_blk mb-5">
                <div className="table-responsive">
                    <div className="d-flex align-items-center justify-content-between bg-light p-3 border-bottom-0">
                        <h6 className="m-0"><strong>My wishlist <a href="javascript:void(0)" className="text-dark ms-2"><i className="bi bi-gear"></i></a></strong></h6>
                        <a href="javascript:void(0)" className="text-dark viewmore">View More</a>
                    </div>
                    <table className="table m-0">
                        <tbody className="border-top-0">
                            {
                                wishListData.map((data,index)=>{
                                    return(
                                        <tr>
                                            <td>
                                                <div className="img">
                                                    <img src={require("../../Common/Images/"+data.logo).default} alt="companyLogo" className="img-fluid" width="32" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="chart-text">
                                                    <h5 className="market_company mb-1">{data.name}</h5>
                                                    <p className="market_comp">{data.comName}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="market_price">{data.marPrice}</p>
                                            </td>
                                            <td className={(data.changeValue.dir==="up"?"up":"down")}>{(data.changeValue.dir==="up"?"+":"-")+data.changeValue.data}</td>
                                            <td className={(data.changePer.dir==="up"?"up":"down")}>{(data.changePer.dir==="up"?"+":"-")+data.changePer.data}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default MyWhishList
