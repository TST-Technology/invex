import React, { useState } from 'react'

const JoinNowCard = () => {

    const [emailAdd, setemailAdd] = useState("");

    return (
        <>
          <section className="newslettersec">
            <div className="container">
                <div className="joinCard">
                    <div className="row">
                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                            <img src={require("../../Common/Images/email.png").default} alt="Email" className="img-fluid " />
                        </div>
                        <div className="col-md-8">
                            <h2 className="main-title text-white">KEEP UPDATED WITH NEW ANALYSIS</h2>
                            <form className="form-group newsletr_form" role="search" method="get" id="" action=""> 
                                <div className="input-group">
                                    <input type="text" value={emailAdd} onChange={(e)=>setemailAdd(e.target.value)} name="s" className="form-control" placeholder="Your work email address" autoComplete="off" /> 
                                    <span className="input-group-append">
                                        <input type="submit" value="Join Now" className="btn btn-white" /> 
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
        </>
    )
}

export default JoinNowCard
