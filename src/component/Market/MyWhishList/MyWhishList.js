import React from 'react'
import { wishListData } from './myWishListData'

const MyWhishList = () => {

    console.log(wishListData)

    return (
        <>
            <div class="whishlist_blk mb-5">
                <div class="table-responsive">
                    <div class="d-flex align-items-center justify-content-between bg-light p-3 border-bottom-0">
                        <h6 class="m-0"><strong>My wishlist <a href="javascript:void(0)" class="text-dark ms-2"><i class="bi bi-gear"></i></a></strong></h6>
                        <a href="javascript:void(0)" class="text-dark viewmore">View More</a>
                    </div>
                    <table class="table m-0">
                        <tbody class="border-top-0">
                            {
                                wishListData.map((data,index)=>{
                                    return(
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <img src={require("../../Common/Images/"+data.logo).default} alt="companyLogo" class="img-fluid" width="32" />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="chart-text">
                                                    <h5 class="market_company mb-1">{data.name}</h5>
                                                    <p class="market_comp">{data.comName}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <p class="market_price">{data.marPrice}</p>
                                            </td>
                                            <td class={(data.changeValue.dir==="up"?"up":"down")}>{(data.changeValue.dir==="up"?"+":"-")+data.changeValue.data}</td>
                                            <td class={(data.changePer.dir==="up"?"up":"down")}>{(data.changePer.dir==="up"?"+":"-")+data.changePer.data}</td>
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
