import React from 'react'

const PricePlaneComp = ({data}) => {
  return (
    <>
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <img src={require("../Common/Images/"+data.userImage).default} className="img-fluid rounded-circle" alt="" />
                        <div className="ms-3">
                            <h5 className="card-title text-left mb-1">Basic Plan</h5>
                            <h6 className="card-price text-muted text-left m-0">Starter Plan</h6>
                        </div>
                    </div>
                    <hr />
                    <ul className="fa-ul">
                        {
                            data.pearks.map(peark => <li><span className="fa-li"><i className="fas fa-check"></i></span>{peark}</li>)   
                        }
                    </ul>
                    <div className="d-grid mt-3">
                        <a href="#" className="btn btn-primary text-uppercase">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PricePlaneComp